<?php
/**
 * Database class for creating tables and managing data
 */

if (!defined('ABSPATH')) {
    exit;
}

class KTD_Database {
    
    /**
     * Create database tables
     */
    public static function create_tables() {
        global $wpdb;
        
        $charset_collate = $wpdb->get_charset_collate();
        $table_name = $wpdb->prefix . 'ktd_bookings';
        
        $sql = "CREATE TABLE IF NOT EXISTS $table_name (
            id bigint(20) NOT NULL AUTO_INCREMENT,
            name varchar(255) NOT NULL,
            email varchar(255) NOT NULL,
            phone varchar(50),
            accommodation varchar(255),
            item_type varchar(255),
            course_title varchar(255),
            item_title varchar(255),
            preferred_date date,
            experience_level varchar(100),
            payment_choice varchar(100),
            payment_mode varchar(100),
            payment_status varchar(50) DEFAULT 'pending',
            currency varchar(10),
            message text,
            internal_notes text,
            status varchar(50) DEFAULT 'new',
            payment_link_url varchar(500),
            paypal_link_url varchar(500),
            bank_transfer_details text,
            booking_source varchar(100) DEFAULT 'wordpress',
            source_page varchar(500),
            event_type varchar(100),
            guest_count int(11),
            accommodation_interest varchar(255),
            total_amount decimal(10,2),
            deposit_amount decimal(10,2),
            due_amount decimal(10,2),
            subtotal_amount decimal(10,2),
            total_payable_now decimal(10,2),
            tags varchar(500),
            extra_json longtext,
            created_at datetime DEFAULT CURRENT_TIMESTAMP,
            updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY  (id),
            KEY email (email),
            KEY status (status),
            KEY created_at (created_at)
        ) $charset_collate;";
        
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
    
    /**
     * Set default options
     */
    public static function set_default_options() {
        $defaults = array(
            'ktd_notification_email' => get_option('admin_email'),
            'ktd_notification_enabled' => '1',
            'ktd_api_key' => wp_generate_password(32, false),
        );
        
        foreach ($defaults as $key => $value) {
            if (get_option($key) === false) {
                add_option($key, $value);
            }
        }
    }
    
    /**
     * Get API key
     */
    public static function get_api_key() {
        return get_option('ktd_api_key');
    }
    
    /**
     * Validate API key
     */
    public static function validate_api_key($key) {
        return $key === self::get_api_key();
    }
}
