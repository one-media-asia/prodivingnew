<?php
/**
 * Settings view template
 */

if (!defined('ABSPATH')) {
    exit;
}
?>

<div class="wrap ktd-settings">
    <h1><?php _e('KTD Booking Settings', 'ktd-booking-manager'); ?></h1>
    
    <form method="post" action="">
        <?php wp_nonce_field('ktd_settings_nonce'); ?>
        
        <table class="form-table">
            <tr>
                <th scope="row">
                    <label for="notification_email"><?php _e('Notification Email', 'ktd-booking-manager'); ?></label>
                </th>
                <td>
                    <input type="email" 
                           id="notification_email" 
                           name="notification_email" 
                           value="<?php echo esc_attr($notification_email); ?>" 
                           class="regular-text">
                    <p class="description"><?php _e('Email address to receive new booking notifications.', 'ktd-booking-manager'); ?></p>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label for="notification_enabled"><?php _e('Enable Email Notifications', 'ktd-booking-manager'); ?></label>
                </th>
                <td>
                    <input type="checkbox" 
                           id="notification_enabled" 
                           name="notification_enabled" 
                           value="1" 
                           <?php checked($notification_enabled, '1'); ?>>
                    <p class="description"><?php _e('Send email notifications when new bookings are received.', 'ktd-booking-manager'); ?></p>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label for="api_key"><?php _e('API Key', 'ktd-booking-manager'); ?></label>
                </th>
                <td>
                    <input type="text" 
                           id="api_key" 
                           name="api_key" 
                           value="<?php echo esc_attr($api_key); ?>" 
                           class="regular-text" 
                           readonly>
                    <p class="description"><?php _e('Use this API key in your external booking forms. This key is auto-generated.', 'ktd-booking-manager'); ?></p>
                </td>
            </tr>
        </table>
        
        <p class="submit">
            <input type="submit" 
                   name="ktd_save_settings" 
                   class="button button-primary" 
                   value="<?php _e('Save Settings', 'ktd-booking-manager'); ?>">
        </p>
    </form>
    
    <hr>
    
    <h2><?php _e('API Endpoints', 'ktd-booking-manager'); ?></h2>
    <table class="form-table">
        <tr>
            <th scope="row"><?php _e('Create Booking', 'ktd-booking-manager'); ?></th>
            <td><code>POST <?php echo rest_url('ktd/v1/bookings/create'); ?></code></td>
        </tr>
        <tr>
            <th scope="row"><?php _e('Get Bookings', 'ktd-booking-manager'); ?></th>
            <td><code>GET <?php echo rest_url('ktd/v1/bookings'); ?></code></td>
        </tr>
        <tr>
            <th scope="row"><?php _e('Update Booking', 'ktd-booking-manager'); ?></th>
            <td><code>PATCH <?php echo rest_url('ktd/v1/bookings/{id}'); ?></code></td>
        </tr>
        <tr>
            <th scope="row"><?php _e('Delete Booking', 'ktd-booking-manager'); ?></th>
            <td><code>DELETE <?php echo rest_url('ktd/v1/bookings/{id}'); ?></code></td>
        </tr>
    </table>
</div>
