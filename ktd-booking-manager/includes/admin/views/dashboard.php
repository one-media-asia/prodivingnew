<?php
/**
 * Dashboard view template
 */

if (!defined('ABSPATH')) {
    exit;
}
?>

<div class="wrap ktd-dashboard">
    <h1><?php _e('KTD Booking Dashboard', 'ktd-booking-manager'); ?></h1>
    
    <!-- Statistics Cards -->
    <div class="ktd-stats-grid">
        <div class="ktd-stat-card">
            <h3><?php _e('Total Bookings', 'ktd-booking-manager'); ?></h3>
            <div class="ktd-stat-value"><?php echo esc_html($total_bookings); ?></div>
        </div>
        <div class="ktd-stat-card ktd-stat-new">
            <h3><?php _e('New', 'ktd-booking-manager'); ?></h3>
            <div class="ktd-stat-value"><?php echo esc_html($new_bookings); ?></div>
        </div>
        <div class="ktd-stat-card ktd-stat-pending">
            <h3><?php _e('Pending', 'ktd-booking-manager'); ?></h3>
            <div class="ktd-stat-value"><?php echo esc_html($pending_bookings); ?></div>
        </div>
        <div class="ktd-stat-card ktd-stat-confirmed">
            <h3><?php _e('Confirmed', 'ktd-booking-manager'); ?></h3>
            <div class="ktd-stat-value"><?php echo esc_html($confirmed_bookings); ?></div>
        </div>
    </div>
    
    <!-- Filters -->
    <div class="ktd-filters">
        <select id="ktd-status-filter" class="ktd-filter-select">
            <option value=""><?php _e('All Statuses', 'ktd-booking-manager'); ?></option>
            <option value="new"><?php _e('New', 'ktd-booking-manager'); ?></option>
            <option value="pending"><?php _e('Pending', 'ktd-booking-manager'); ?></option>
            <option value="confirmed"><?php _e('Confirmed', 'ktd-booking-manager'); ?></option>
            <option value="cancelled"><?php _e('Cancelled', 'ktd-booking-manager'); ?></option>
        </select>
        <input type="text" id="ktd-search" class="ktd-search-input" placeholder="<?php _e('Search bookings...', 'ktd-booking-manager'); ?>">
        <button id="ktd-refresh" class="button"><?php _e('Refresh', 'ktd-booking-manager'); ?></button>
    </div>
    
    <!-- Bookings Table -->
    <div class="ktd-bookings-table-container">
        <table class="wp-list-table widefat fixed striped ktd-bookings-table">
            <thead>
                <tr>
                    <th><?php _e('ID', 'ktd-booking-manager'); ?></th>
                    <th><?php _e('Name', 'ktd-booking-manager'); ?></th>
                    <th><?php _e('Email', 'ktd-booking-manager'); ?></th>
                    <th><?php _e('Course', 'ktd-booking-manager'); ?></th>
                    <th><?php _e('Status', 'ktd-booking-manager'); ?></th>
                    <th><?php _e('Payment', 'ktd-booking-manager'); ?></th>
                    <th><?php _e('Amount', 'ktd-booking-manager'); ?></th>
                    <th><?php _e('Date', 'ktd-booking-manager'); ?></th>
                    <th><?php _e('Actions', 'ktd-booking-manager'); ?></th>
                </tr>
            </thead>
            <tbody id="ktd-bookings-body">
                <?php foreach ($recent_bookings as $booking): ?>
                <tr data-booking-id="<?php echo esc_attr($booking->id); ?>">
                    <td><?php echo esc_html($booking->id); ?></td>
                    <td><?php echo esc_html($booking->name); ?></td>
                    <td><?php echo esc_html($booking->email); ?></td>
                    <td><?php echo esc_html($booking->course_title); ?></td>
                    <td><span class="ktd-status ktd-status-<?php echo esc_attr($booking->status); ?>"><?php echo esc_html($booking->status); ?></span></td>
                    <td><span class="ktd-payment-status ktd-payment-<?php echo esc_attr($booking->payment_status); ?>"><?php echo esc_html($booking->payment_status); ?></span></td>
                    <td><?php echo $booking->total_amount ? number_format($booking->total_amount, 2) : '-'; ?></td>
                    <td><?php echo esc_html($booking->created_at); ?></td>
                    <td>
                        <button class="button button-small ktd-view-btn" data-id="<?php echo esc_attr($booking->id); ?>"><?php _e('View', 'ktd-booking-manager'); ?></button>
                        <button class="button button-small ktd-delete-btn" data-id="<?php echo esc_attr($booking->id); ?>"><?php _e('Delete', 'ktd-booking-manager'); ?></button>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    
    <!-- Pagination -->
    <div class="ktd-pagination">
        <button id="ktd-prev-page" class="button" disabled><?php _e('Previous', 'ktd-booking-manager'); ?></button>
        <span id="ktd-page-info">Page 1</span>
        <button id="ktd-next-page" class="button"><?php _e('Next', 'ktd-booking-manager'); ?></button>
    </div>
</div>

<!-- Booking Modal -->
<div id="ktd-booking-modal" class="ktd-modal" style="display: none;">
    <div class="ktd-modal-content">
        <div class="ktd-modal-header">
            <h2><?php _e('Booking Details', 'ktd-booking-manager'); ?></h2>
            <button class="ktd-modal-close">&times;</button>
        </div>
        <div class="ktd-modal-body" id="ktd-modal-body">
            <!-- Booking details will be loaded here -->
        </div>
        <div class="ktd-modal-footer">
            <button class="button ktd-modal-close"><?php _e('Close', 'ktd-booking-manager'); ?></button>
        </div>
    </div>
</div>

<style>
.ktd-dashboard {
    max-width: 1400px;
    margin: 20px auto;
}

.ktd-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.ktd-stat-card {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.ktd-stat-card h3 {
    margin: 0 0 10px 0;
    font-size: 14px;
    color: #666;
}

.ktd-stat-value {
    font-size: 32px;
    font-weight: bold;
    color: #23282d;
}

.ktd-stat-new .ktd-stat-value { color: #00a32a; }
.ktd-stat-pending .ktd-stat-value { color: #d63638; }
.ktd-stat-confirmed .ktd-stat-value { color: #0073aa; }

.ktd-filters {
    display: flex;
    gap: 10px;
    margin: 20px 0;
    align-items: center;
}

.ktd-filter-select, .ktd-search-input {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.ktd-search-input {
    flex: 1;
}

.ktd-bookings-table-container {
    margin: 20px 0;
    overflow-x: auto;
}

.ktd-bookings-table {
    width: 100%;
}

.ktd-status {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
}

.ktd-status-new { background: #e7f7ed; color: #00a32a; }
.ktd-status-pending { background: #f7e7e7; color: #d63638; }
.ktd-status-confirmed { background: #e7f3f7; color: #0073aa; }
.ktd-status-cancelled { background: #f0f0f0; color: #666; }

.ktd-payment-status {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
}

.ktd-payment-pending { background: #fff3cd; color: #856404; }
.ktd-payment-paid { background: #d4edda; color: #155724; }
.ktd-payment-failed { background: #f8d7da; color: #721c24; }

.ktd-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
}

.ktd-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100000;
}

.ktd-modal-content {
    background: #fff;
    border-radius: 8px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
}

.ktd-modal-header {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ktd-modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

.ktd-modal-body {
    padding: 20px;
}

.ktd-modal-footer {
    padding: 20px;
    border-top: 1px solid #eee;
    text-align: right;
}

.ktd-booking-detail {
    margin-bottom: 15px;
}

.ktd-booking-detail label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

.ktd-booking-detail textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-height: 80px;
}
</style>
