<?php
/**
 * Settings class for plugin configuration
 */

if (!defined('ABSPATH')) {
    exit;
}

class KTD_Settings {
    
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
        add_action('admin_init', array($this, 'register_settings'));
    }
    
    /**
     * Register settings
     */
    public function register_settings() {
        register_setting('ktd_settings', 'ktd_notification_email');
        register_setting('ktd_settings', 'ktd_notification_enabled');
        register_setting('ktd_settings', 'ktd_api_key');
    }
    
    /**
     * Render settings page
     */
    public static function render_settings() {
        if (isset($_POST['ktd_save_settings'])) {
            check_admin_referer('ktd_settings_nonce');
            
            update_option('ktd_notification_email', sanitize_email($_POST['notification_email']));
            update_option('ktd_notification_enabled', isset($_POST['notification_enabled']) ? '1' : '0');
            
            echo '<div class="notice notice-success"><p>Settings saved successfully.</p></div>';
        }
        
        $notification_email = get_option('ktd_notification_email');
        $notification_enabled = get_option('ktd_notification_enabled');
        $api_key = get_option('ktd_api_key');
        
        include KTD_BOOKING_MANAGER_PATH . 'includes/admin/views/settings.php';
    }
}
