<?php
/**
 * REST API class for handling external requests
 */

if (!defined('ABSPATH')) {
    exit;
}

class KTD_REST_API {
    
    /**
     * Singleton instance
     */
    private static $instance = null;
    
    /**
     * Get singleton instance
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Constructor
     */
    private function __construct() {
        add_action('rest_api_init', array($this, 'register_routes'));
    }
    
    /**
     * Register REST API routes
     */
    public function register_routes() {
        register_rest_route('ktd/v1', '/bookings/create', array(
            'methods' => 'POST',
            'callback' => array($this, 'create_booking'),
            'permission_callback' => '__return_true',
        ));
        
        register_rest_route('ktd/v1', '/bookings', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_bookings'),
            'permission_callback' => array($this, 'check_api_key'),
        ));
        
        register_rest_route('ktd/v1', '/bookings/(?P<id>\d+)', array(
            'methods' => array('GET', 'PATCH', 'PUT', 'DELETE'),
            'callback' => array($this, 'handle_booking'),
            'permission_callback' => array($this, 'check_api_key'),
        ));
        
        register_rest_route('ktd/v1', '/booking', array(
            'methods' => 'POST',
            'callback' => array($this, 'create_booking'),
            'permission_callback' => '__return_true',
        ));
        
        register_rest_route('ktd/v1', '/crm-intake', array(
            'methods' => 'POST',
            'callback' => array($this, 'create_booking'),
            'permission_callback' => '__return_true',
        ));
    }
    
    /**
     * Check API key permission
     */
    public function check_api_key($request) {
        $api_key = $request->get_header('X-API-Key');
        if (!$api_key) {
            $params = $request->get_json_params();
            $api_key = isset($params['api_key']) ? $params['api_key'] : '';
        }
        
        return KTD_Database::validate_api_key($api_key);
    }
    
    /**
     * Create booking
     */
    public function create_booking($request) {
        $params = $request->get_json_params();
        
        $api_key = isset($params['api_key']) ? $params['api_key'] : '';
        if (!KTD_Database::validate_api_key($api_key)) {
            return new WP_Error('ktd_forbidden', 'Invalid API key.', array('status' => 403));
        }
        
        $name = isset($params['name']) ? sanitize_text_field($params['name']) : '';
        $email = isset($params['email']) ? sanitize_email($params['email']) : '';
        
        if (empty($name) || empty($email)) {
            return new WP_Error('ktd_missing_fields', 'Name and email are required', array('status' => 400));
        }
        
        global $wpdb;
        $table_name = $wpdb->prefix . 'ktd_bookings';
        
        $data = array(
            'name' => $name,
            'email' => $email,
            'phone' => isset($params['phone']) ? sanitize_text_field($params['phone']) : '',
            'accommodation' => isset($params['accommodation']) ? sanitize_text_field($params['accommodation']) : '',
            'item_type' => isset($params['item_type']) ? sanitize_text_field($params['item_type']) : '',
            'course_title' => isset($params['course_title']) ? sanitize_text_field($params['course_title']) : '',
            'item_title' => isset($params['item_title']) ? sanitize_text_field($params['item_title']) : '',
            'preferred_date' => isset($params['preferred_date']) ? sanitize_text_field($params['preferred_date']) : null,
            'experience_level' => isset($params['experience_level']) ? sanitize_text_field($params['experience_level']) : '',
            'payment_choice' => isset($params['payment_choice']) ? sanitize_text_field($params['payment_choice']) : '',
            'payment_mode' => isset($params['payment_mode']) ? sanitize_text_field($params['payment_mode']) : '',
            'payment_status' => isset($params['payment_status']) ? sanitize_text_field($params['payment_status']) : 'pending',
            'currency' => isset($params['currency']) ? sanitize_text_field($params['currency']) : '',
            'message' => isset($params['message']) ? sanitize_textarea_field($params['message']) : '',
            'internal_notes' => isset($params['internal_notes']) ? sanitize_textarea_field($params['internal_notes']) : '',
            'status' => isset($params['status']) ? sanitize_text_field($params['status']) : 'new',
            'payment_link_url' => isset($params['payment_link_url']) ? esc_url_raw($params['payment_link_url']) : '',
            'paypal_link_url' => isset($params['paypal_link_url']) ? esc_url_raw($params['paypal_link_url']) : '',
            'bank_transfer_details' => isset($params['bank_transfer_details']) ? sanitize_textarea_field($params['bank_transfer_details']) : '',
            'booking_source' => isset($params['booking_source']) ? sanitize_text_field($params['booking_source']) : 'wordpress',
            'source_page' => isset($params['source_page']) ? esc_url_raw($params['source_page']) : '',
            'event_type' => isset($params['event_type']) ? sanitize_text_field($params['event_type']) : '',
            'guest_count' => isset($params['guest_count']) ? intval($params['guest_count']) : null,
            'accommodation_interest' => isset($params['accommodation_interest']) ? sanitize_text_field($params['accommodation_interest']) : '',
            'total_amount' => isset($params['total_amount']) ? floatval($params['total_amount']) : null,
            'deposit_amount' => isset($params['deposit_amount']) ? floatval($params['deposit_amount']) : null,
            'due_amount' => isset($params['due_amount']) ? floatval($params['due_amount']) : null,
            'subtotal_amount' => isset($params['subtotal_amount']) ? floatval($params['subtotal_amount']) : null,
            'total_payable_now' => isset($params['total_payable_now']) ? floatval($params['total_payable_now']) : null,
            'tags' => isset($params['tags']) ? sanitize_text_field($params['tags']) : '',
            'extra_json' => isset($params['extra_json']) ? wp_json_encode($params['extra_json']) : wp_json_encode($params),
        );
        
        $result = $wpdb->insert($table_name, $data);
        
        if ($result === false) {
            error_log('KTD Booking Error: ' . $wpdb->last_error);
            return new WP_Error('ktd_creation_failed', 'Failed to create booking: ' . $wpdb->last_error, array('status' => 500));
        }
        
        if ($result !== false) {
            $booking_id = $wpdb->insert_id;
            
            // Send notification email
            $this->send_notification_email($booking_id, $data);
            
            $booking = $wpdb->get_row($wpdb->prepare(
                "SELECT * FROM $table_name WHERE id = %d",
                $booking_id
            ));
            
            return rest_ensure_response(array(
                'success' => true,
                'id' => $booking_id,
                'booking' => $booking
            ));
        } else {
            return new WP_Error('ktd_creation_failed', 'Failed to create booking', array('status' => 500));
        }
    }
    
    /**
     * Get bookings
     */
    public function get_bookings($request) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'ktd_bookings';
        
        $page = $request->get_param('page') ? intval($request->get_param('page')) : 1;
        $per_page = $request->get_param('per_page') ? intval($request->get_param('per_page')) : 20;
        $offset = ($page - 1) * $per_page;
        
        $status = $request->get_param('status');
        $search = $request->get_param('search');
        
        $where = "WHERE 1=1";
        if ($status) {
            $where .= $wpdb->prepare(" AND status = %s", $status);
        }
        if ($search) {
            $where .= $wpdb->prepare(" AND (name LIKE %s OR email LIKE %s OR course_title LIKE %s)", 
                "%$search%", "%$search%", "%$search%");
        }
        
        $bookings = $wpdb->get_results(
            "SELECT * FROM $table_name $where ORDER BY created_at DESC LIMIT $per_page OFFSET $offset"
        );
        
        $total = $wpdb->get_var("SELECT COUNT(*) FROM $table_name $where");
        
        return rest_ensure_response(array(
            'bookings' => $bookings,
            'total' => $total,
            'pages' => ceil($total / $per_page)
        ));
    }
    
    /**
     * Handle single booking operations
     */
    public function handle_booking($request) {
        $booking_id = $request->get_param('id');
        $method = $request->get_method();
        
        global $wpdb;
        $table_name = $wpdb->prefix . 'ktd_bookings';
        
        if ($method === 'GET') {
            $booking = $wpdb->get_row($wpdb->prepare(
                "SELECT * FROM $table_name WHERE id = %d",
                $booking_id
            ));
            
            if (!$booking) {
                return new WP_Error('ktd_not_found', 'Booking not found', array('status' => 404));
            }
            
            return rest_ensure_response($booking);
        }
        
        if ($method === 'DELETE') {
            $result = $wpdb->delete(
                $table_name,
                array('id' => $booking_id),
                array('%d')
            );
            
            if ($result !== false) {
                return rest_ensure_response(array('success' => true));
            } else {
                return new WP_Error('ktd_delete_failed', 'Failed to delete booking', array('status' => 500));
            }
        }
        
        if ($method === 'PUT' || $method === 'PATCH') {
            $params = $request->get_json_params();
            
            $data = array();
            $format = array();
            
            $allowed_fields = array(
                'status', 'payment_status', 'internal_notes',
                'phone', 'accommodation', 'preferred_date', 'experience_level',
                'payment_choice', 'payment_mode', 'currency', 'message',
                'payment_link_url', 'paypal_link_url', 'bank_transfer_details',
                'event_type', 'guest_count', 'accommodation_interest',
                'total_amount', 'deposit_amount', 'due_amount', 'subtotal_amount', 'total_payable_now'
            );
            
            foreach ($allowed_fields as $field) {
                if (isset($params[$field])) {
                    $data[$field] = sanitize_text_field($params[$field]);
                    $format[] = '%s';
                }
            }
            
            if (empty($data)) {
                return new WP_Error('ktd_no_data', 'No data to update', array('status' => 400));
            }
            
            $result = $wpdb->update(
                $table_name,
                $data,
                array('id' => $booking_id),
                $format,
                array('%d')
            );
            
            if ($result !== false) {
                $booking = $wpdb->get_row($wpdb->prepare(
                    "SELECT * FROM $table_name WHERE id = %d",
                    $booking_id
                ));
                return rest_ensure_response($booking);
            } else {
                return new WP_Error('ktd_update_failed', 'Failed to update booking', array('status' => 500));
            }
        }
    }
    
    /**
     * Send notification email
     */
    private function send_notification_email($booking_id, $data) {
        $notification_enabled = get_option('ktd_notification_enabled');
        error_log('KTD Email: Notification enabled = ' . ($notification_enabled === '1' ? 'yes' : 'no'));
        
        if ($notification_enabled !== '1') {
            error_log('KTD Email: Notifications disabled, skipping');
            return;
        }
        
        $to = get_option('ktd_notification_email');
        error_log('KTD Email: Notification email = ' . ($to ?: 'not set'));
        
        if (empty($to)) {
            error_log('KTD Email: No recipient email configured');
            return;
        }
        
        $subject = sprintf(__('New Booking: %s', 'ktd-booking-manager'), $data['name']);
        
        $message = '<html><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">';
        $message .= '<div style="max-width: 600px; margin: 0 auto; padding: 20px;">';
        $message .= '<div style="background: linear-gradient(135deg, #0077b6 0%, #00b4d8 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">';
        $message .= '<h1 style="color: white; margin: 0; font-size: 28px;">🏄 New Booking Received</h1>';
        $message .= '</div>';
        $message .= '<div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">';
        $message .= '<h2 style="color: #0077b6; margin-top: 0;">Booking Details</h2>';
        $message .= '<table style="width: 100%; border-collapse: collapse;">';
        $message .= '<tr style="background: #f0f0f0;"><td style="padding: 12px; font-weight: bold; width: 150px;">Name:</td><td style="padding: 12px;">' . esc_html($data['name']) . '</td></tr>';
        $message .= '<tr><td style="padding: 12px; font-weight: bold;">Email:</td><td style="padding: 12px;"><a href="mailto:' . esc_html($data['email']) . '">' . esc_html($data['email']) . '</a></td></tr>';
        if (!empty($data['phone'])) {
            $message .= '<tr style="background: #f0f0f0;"><td style="padding: 12px; font-weight: bold;">Phone:</td><td style="padding: 12px;">' . esc_html($data['phone']) . '</td></tr>';
        }
        if (!empty($data['course_title'])) {
            $message .= '<tr><td style="padding: 12px; font-weight: bold;">Course:</td><td style="padding: 12px;">' . esc_html($data['course_title']) . '</td></tr>';
        }
        if (!empty($data['item_type'])) {
            $message .= '<tr style="background: #f0f0f0;"><td style="padding: 12px; font-weight: bold;">Type:</td><td style="padding: 12px;">' . esc_html($data['item_type']) . '</td></tr>';
        }
        if (!empty($data['total_amount'])) {
            $message .= '<tr><td style="padding: 12px; font-weight: bold;">Total Amount:</td><td style="padding: 12px; color: #0077b6; font-weight: bold;">' . number_format($data['total_amount'], 2) . '</td></tr>';
        }
        if (!empty($data['deposit_amount'])) {
            $message .= '<tr style="background: #f0f0f0;"><td style="padding: 12px; font-weight: bold;">Deposit:</td><td style="padding: 12px; color: #28a745; font-weight: bold;">' . number_format($data['deposit_amount'], 2) . '</td></tr>';
        }
        $message .= '<tr><td style="padding: 12px; font-weight: bold;">Source:</td><td style="padding: 12px;">' . esc_html($data['booking_source']) . '</td></tr>';
        $message .= '</table>';
        
        if (!empty($data['message'])) {
            $message .= '<h3 style="color: #0077b6; margin-top: 20px;">Message</h3>';
            $message .= '<div style="background: white; padding: 15px; border-left: 4px solid #0077b6; border-radius: 4px;">' . nl2br(esc_html($data['message'])) . '</div>';
        }
        
        $message .= '<div style="margin-top: 30px; padding: 20px; background: #e3f2fd; border-radius: 8px; text-align: center;">';
        $message .= '<h3 style="color: #0077b6; margin: 0 0 10px 0;">Need to respond quickly?</h3>';
        $message .= '<p style="margin: 0;">Contact us on WhatsApp:</p>';
        $message .= '<a href="https://wa.me/6281353833289" style="display: inline-block; margin-top: 15px; padding: 12px 30px; background: #25D366; color: white; text-decoration: none; border-radius: 25px; font-weight: bold;">💬 Chat on WhatsApp</a>';
        $message .= '</div>';
        
        $message .= '<div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">';
        $message .= '<p>This booking was submitted via ' . esc_html($data['booking_source']) . '</p>';
        $message .= '<p>Pro Diving Asia - Bali Dive Training</p>';
        $message .= '</div>';
        $message .= '</div></div></body></html>';
        
        $headers = array('Content-Type: text/html; charset=UTF-8');
        $sent = wp_mail($to, $subject, $message, $headers);
        error_log('KTD Email: Mail sent result = ' . ($sent ? 'success' : 'failed'));
        
        if (!$sent) {
            global $phpmailer;
            if (isset($phpmailer) && is_object($phpmailer)) {
                error_log('KTD Email: Error info = ' . $phpmailer->ErrorInfo);
            }
        }
    }
}
