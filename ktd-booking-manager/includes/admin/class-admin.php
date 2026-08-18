<?php
/**
 * Admin class for plugin initialization
 */

if (!defined('ABSPATH')) {
    exit;
}

class KTD_Admin {
    
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
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
    }
    
    /**
     * Add admin menu
     */
    public function add_admin_menu() {
        add_menu_page(
            __('KTD Bookings', 'ktd-booking-manager'),
            __('KTD Bookings', 'ktd-booking-manager'),
            'manage_options',
            'ktd-bookings',
            array('KTD_Dashboard', 'render_dashboard'),
            'dashicons-calendar-alt',
            30
        );
        
        add_submenu_page(
            'ktd-bookings',
            __('Dashboard', 'ktd-booking-manager'),
            __('Dashboard', 'ktd-booking-manager'),
            'manage_options',
            'ktd-bookings',
            array('KTD_Dashboard', 'render_dashboard')
        );
        
        add_submenu_page(
            'ktd-bookings',
            __('Settings', 'ktd-booking-manager'),
            __('Settings', 'ktd-booking-manager'),
            'manage_options',
            'ktd-settings',
            array('KTD_Settings', 'render_settings')
        );
    }
    
    /**
     * Enqueue admin scripts and styles
     */
    public function enqueue_admin_scripts($hook) {
        if (strpos($hook, 'ktd-bookings') === false) {
            return;
        }
        
        wp_enqueue_style(
            'ktd-admin-style',
            KTD_BOOKING_MANAGER_URL . 'assets/css/admin.css',
            array(),
            KTD_BOOKING_MANAGER_VERSION
        );
        
        wp_enqueue_script(
            'ktd-admin-script',
            KTD_BOOKING_MANAGER_URL . 'assets/js/admin.js',
            array('jquery'),
            KTD_BOOKING_MANAGER_VERSION,
            true
        );
        
        wp_localize_script('ktd-admin-script', 'ktdAdmin', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('ktd_admin_nonce'),
            'apiUrl' => rest_url('ktd/v1'),
            'apiKey' => get_option('ktd_api_key'),
        ));
    }
}
