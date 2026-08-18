<?php
/**
 * Dashboard class for displaying and managing bookings
 */

if (!defined('ABSPATH')) {
    exit;
}

class KTD_Dashboard {
    
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
        add_action('wp_ajax_ktd_get_bookings', array($this, 'ajax_get_bookings'));
        add_action('wp_ajax_ktd_update_booking', array($this, 'ajax_update_booking'));
        add_action('wp_ajax_ktd_delete_booking', array($this, 'ajax_delete_booking'));
    }
    
    /**
     * Render dashboard
     */
    public static function render_dashboard() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'ktd_bookings';
        
        // Get statistics
        $total_bookings = $wpdb->get_var("SELECT COUNT(*) FROM $table_name");
        $new_bookings = $wpdb->get_var("SELECT COUNT(*) FROM $table_name WHERE status = 'new'");
        $pending_bookings = $wpdb->get_var("SELECT COUNT(*) FROM $table_name WHERE status = 'pending'");
        $confirmed_bookings = $wpdb->get_var("SELECT COUNT(*) FROM $table_name WHERE status = 'confirmed'");
        
        // Get recent bookings
        $recent_bookings = $wpdb->get_results(
            "SELECT * FROM $table_name ORDER BY created_at DESC LIMIT 10"
        );
        
        include KTD_BOOKING_MANAGER_PATH . 'includes/admin/views/dashboard.php';
    }
    
    /**
     * AJAX: Get bookings
     */
    public function ajax_get_bookings() {
        check_ajax_referer('ktd_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Permission denied'));
        }
        
        global $wpdb;
        $table_name = $wpdb->prefix . 'ktd_bookings';
        
        $page = isset($_POST['page']) ? intval($_POST['page']) : 1;
        $per_page = isset($_POST['per_page']) ? intval($_POST['per_page']) : 20;
        $offset = ($page - 1) * $per_page;
        
        $status = isset($_POST['status']) ? sanitize_text_field($_POST['status']) : '';
        $search = isset($_POST['search']) ? sanitize_text_field($_POST['search']) : '';
        
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
        
        wp_send_json_success(array(
            'bookings' => $bookings,
            'total' => $total,
            'pages' => ceil($total / $per_page)
        ));
    }
    
    /**
     * AJAX: Update booking
     */
    public function ajax_update_booking() {
        check_ajax_referer('ktd_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Permission denied'));
        }
        
        $booking_id = isset($_POST['id']) ? intval($_POST['id']) : 0;
        if (!$booking_id) {
            wp_send_json_error(array('message' => 'Invalid booking ID'));
        }
        
        global $wpdb;
        $table_name = $wpdb->prefix . 'ktd_bookings';
        
        $data = array();
        $format = array();
        
        if (isset($_POST['status'])) {
            $data['status'] = sanitize_text_field($_POST['status']);
            $format[] = '%s';
        }
        if (isset($_POST['payment_status'])) {
            $data['payment_status'] = sanitize_text_field($_POST['payment_status']);
            $format[] = '%s';
        }
        if (isset($_POST['internal_notes'])) {
            $data['internal_notes'] = sanitize_textarea_field($_POST['internal_notes']);
            $format[] = '%s';
        }
        
        if (empty($data)) {
            wp_send_json_error(array('message' => 'No data to update'));
        }
        
        $result = $wpdb->update(
            $table_name,
            $data,
            array('id' => $booking_id),
            $format,
            array('%d')
        );
        
        if ($result !== false) {
            // Send notification if status changed
            if (isset($data['status'])) {
                $this->send_status_notification($booking_id, $data['status']);
            }
            wp_send_json_success(array('message' => 'Booking updated successfully'));
        } else {
            wp_send_json_error(array('message' => 'Failed to update booking'));
        }
    }
    
    /**
     * AJAX: Delete booking
     */
    public function ajax_delete_booking() {
        check_ajax_referer('ktd_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Permission denied'));
        }
        
        $booking_id = isset($_POST['id']) ? intval($_POST['id']) : 0;
        if (!$booking_id) {
            wp_send_json_error(array('message' => 'Invalid booking ID'));
        }
        
        global $wpdb;
        $table_name = $wpdb->prefix . 'ktd_bookings';
        
        $result = $wpdb->delete(
            $table_name,
            array('id' => $booking_id),
            array('%d')
        );
        
        if ($result !== false) {
            wp_send_json_success(array('message' => 'Booking deleted successfully'));
        } else {
            wp_send_json_error(array('message' => 'Failed to delete booking'));
        }
    }
    
    /**
     * Send status notification email
     */
    private function send_status_notification($booking_id, $status) {
        global $wpdb;
        $table_name = $wpdb->prefix . 'ktd_bookings';
        
        $booking = $wpdb->get_row($wpdb->prepare(
            "SELECT * FROM $table_name WHERE id = %d",
            $booking_id
        ));
        
        if (!$booking) {
            return;
        }
        
        $to = $booking->email;
        $subject = sprintf(__('Booking Status Update: %s', 'ktd-booking-manager'), $status);
        
        $message = sprintf(
            __('Your booking status has been updated to: %s', 'ktd-booking-manager'),
            $status
        );
        $message .= "\n\n";
        $message .= __('Booking Details:', 'ktd-booking-manager') . "\n";
        $message .= sprintf(__('Name: %s', 'ktd-booking-manager'), $booking->name) . "\n";
        $message .= sprintf(__('Course: %s', 'ktd-booking-manager'), $booking->course_title) . "\n";
        $message .= sprintf(__('Date: %s', 'ktd-booking-manager'), $booking->created_at) . "\n";
        
        wp_mail($to, $subject, $message);
    }
}
