<?php
/**
 * Plugin Name: KTD Booking Manager
 * Plugin URI: https://prodiving.asia
 * Description: A booking management plugin with dashboard and email notifications
 * Version: 1.0.0
 * Author: One Media Asia
 * Author URI: https://onemedia.asia
 * License: GPL v2 or later
 * Text Domain: ktd-booking-manager
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('KTD_BOOKING_MANAGER_VERSION', '1.0.0');
define('KTD_BOOKING_MANAGER_PATH', plugin_dir_path(__FILE__));
define('KTD_BOOKING_MANAGER_URL', plugin_dir_url(__FILE__));

/**
 * Main plugin class
 */
class KTD_Booking_Manager {
    
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
        $this->load_dependencies();
        $this->init_hooks();
    }
    
    /**
     * Load dependencies
     */
    private function load_dependencies() {
        // Admin files
        require_once KTD_BOOKING_MANAGER_PATH . 'includes/admin/class-admin.php';
        require_once KTD_BOOKING_MANAGER_PATH . 'includes/admin/class-dashboard.php';
        require_once KTD_BOOKING_MANAGER_PATH . 'includes/admin/class-settings.php';
        
        // API files
        require_once KTD_BOOKING_MANAGER_PATH . 'includes/api/class-rest-api.php';
        
        // Database files
        require_once KTD_BOOKING_MANAGER_PATH . 'includes/database/class-database.php';
    }
    
    /**
     * Initialize hooks
     */
    private function init_hooks() {
        register_activation_hook(__FILE__, array($this, 'activate'));
        register_deactivation_hook(__FILE__, array($this, 'deactivate'));
        
        add_action('plugins_loaded', array($this, 'init'));
        add_action('init', array($this, 'load_textdomain'));
    }
    
    /**
     * Plugin activation
     */
    public function activate() {
        KTD_Database::create_tables();
        KTD_Database::set_default_options();
        flush_rewrite_rules();
    }
    
    /**
     * Plugin deactivation
     */
    public function deactivate() {
        flush_rewrite_rules();
    }
    
    /**
     * Initialize plugin
     */
    public function init() {
        if (is_admin()) {
            KTD_Admin::get_instance();
            KTD_Dashboard::get_instance();
            KTD_Settings::get_instance();
        }
        
        KTD_REST_API::get_instance();
    }
    
    /**
     * Load text domain
     */
    public function load_textdomain() {
        load_plugin_textdomain('ktd-booking-manager', false, dirname(plugin_basename(__FILE__)) . '/languages');
    }
}

/**
 * Initialize plugin
 */
function ktd_booking_manager() {
    return KTD_Booking_Manager::get_instance();
}

// Start the plugin
ktd_booking_manager();
