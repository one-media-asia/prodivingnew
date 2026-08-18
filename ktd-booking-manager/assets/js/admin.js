(function($) {
    'use strict';
    
    let currentPage = 1;
    let totalPages = 1;
    
    // Load bookings on page load
    $(document).ready(function() {
        loadBookings();
    });
    
    // Refresh button
    $('#ktd-refresh').on('click', function() {
        loadBookings();
    });
    
    // Status filter
    $('#ktd-status-filter').on('change', function() {
        currentPage = 1;
        loadBookings();
    });
    
    // Search
    $('#ktd-search').on('keyup', function(e) {
        if (e.keyCode === 13) {
            currentPage = 1;
            loadBookings();
        }
    });
    
    // Pagination
    $('#ktd-prev-page').on('click', function() {
        if (currentPage > 1) {
            currentPage--;
            loadBookings();
        }
    });
    
    $('#ktd-next-page').on('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            loadBookings();
        }
    });
    
    // View booking modal
    $(document).on('click', '.ktd-view-btn', function() {
        const bookingId = $(this).data('id');
        loadBookingDetails(bookingId);
    });
    
    // Delete booking
    $(document).on('click', '.ktd-delete-btn', function() {
        if (confirm('Are you sure you want to delete this booking?')) {
            const bookingId = $(this).data('id');
            deleteBooking(bookingId);
        }
    });
    
    // Close modal
    $(document).on('click', '.ktd-modal-close', function() {
        $('#ktd-booking-modal').hide();
    });
    
    // Save booking changes
    $(document).on('click', '.ktd-save-booking', function() {
        const bookingId = $(this).data('id');
        const status = $('#ktd-edit-status').val();
        const paymentStatus = $('#ktd-edit-payment-status').val();
        const internalNotes = $('#ktd-edit-internal-notes').val();
        
        updateBooking(bookingId, {
            status: status,
            payment_status: paymentStatus,
            internal_notes: internalNotes
        });
    });
    
    /**
     * Load bookings
     */
    function loadBookings() {
        const status = $('#ktd-status-filter').val();
        const search = $('#ktd-search').val();
        
        $.ajax({
            url: ktdAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: 'ktd_get_bookings',
                nonce: ktdAdmin.nonce,
                page: currentPage,
                per_page: 20,
                status: status,
                search: search
            },
            beforeSend: function() {
                $('#ktd-bookings-body').html('<tr><td colspan="9" style="text-align:center;">Loading...</td></tr>');
            },
            success: function(response) {
                if (response.success) {
                    renderBookings(response.data.bookings);
                    totalPages = response.data.pages;
                    updatePagination();
                } else {
                    $('#ktd-bookings-body').html('<tr><td colspan="9" style="text-align:center;">Error loading bookings</td></tr>');
                }
            },
            error: function() {
                $('#ktd-bookings-body').html('<tr><td colspan="9" style="text-align:center;">Error loading bookings</td></tr>');
            }
        });
    }
    
    /**
     * Render bookings table
     */
    function renderBookings(bookings) {
        let html = '';
        
        if (bookings.length === 0) {
            html = '<tr><td colspan="9" style="text-align:center;">No bookings found</td></tr>';
        } else {
            bookings.forEach(function(booking) {
                html += `
                    <tr data-booking-id="${booking.id}">
                        <td>${booking.id}</td>
                        <td>${booking.name}</td>
                        <td>${booking.email}</td>
                        <td>${booking.course_title || '-'}</td>
                        <td><span class="ktd-status ktd-status-${booking.status}">${booking.status}</span></td>
                        <td><span class="ktd-payment-status ktd-payment-${booking.payment_status}">${booking.payment_status}</span></td>
                        <td>${booking.total_amount ? parseFloat(booking.total_amount).toFixed(2) : '-'}</td>
                        <td>${booking.created_at}</td>
                        <td>
                            <button class="button button-small ktd-view-btn" data-id="${booking.id}">View</button>
                            <button class="button button-small ktd-delete-btn" data-id="${booking.id}">Delete</button>
                        </td>
                    </tr>
                `;
            });
        }
        
        $('#ktd-bookings-body').html(html);
    }
    
    /**
     * Update pagination
     */
    function updatePagination() {
        $('#ktd-page-info').text(`Page ${currentPage} of ${totalPages}`);
        $('#ktd-prev-page').prop('disabled', currentPage === 1);
        $('#ktd-next-page').prop('disabled', currentPage === totalPages);
    }
    
    /**
     * Load booking details
     */
    function loadBookingDetails(bookingId) {
        $.ajax({
            url: ktdAdmin.apiUrl + '/bookings/' + bookingId,
            type: 'GET',
            headers: {
                'X-API-Key': ktdAdmin.apiKey
            },
            beforeSend: function() {
                $('#ktd-modal-body').html('<p>Loading...</p>');
            },
            success: function(booking) {
                renderBookingDetails(booking);
                $('#ktd-booking-modal').show();
            },
            error: function() {
                $('#ktd-modal-body').html('<p>Error loading booking details</p>');
            }
        });
    }
    
    /**
     * Render booking details in modal
     */
    function renderBookingDetails(booking) {
        const html = `
            <div class="ktd-booking-detail">
                <label><?php _e('Name', 'ktd-booking-manager'); ?></label>
                <div>${booking.name}</div>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Email', 'ktd-booking-manager'); ?></label>
                <div>${booking.email}</div>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Phone', 'ktd-booking-manager'); ?></label>
                <div>${booking.phone || '-'}</div>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Course', 'ktd-booking-manager'); ?></label>
                <div>${booking.course_title || '-'}</div>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Type', 'ktd-booking-manager'); ?></label>
                <div>${booking.item_type || '-'}</div>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Preferred Date', 'ktd-booking-manager'); ?></label>
                <div>${booking.preferred_date || '-'}</div>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Total Amount', 'ktd-booking-manager'); ?></label>
                <div>${booking.total_amount ? parseFloat(booking.total_amount).toFixed(2) : '-'}</div>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Deposit Amount', 'ktd-booking-manager'); ?></label>
                <div>${booking.deposit_amount ? parseFloat(booking.deposit_amount).toFixed(2) : '-'}</div>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Status', 'ktd-booking-manager'); ?></label>
                <select id="ktd-edit-status" class="regular-text">
                    <option value="new" ${booking.status === 'new' ? 'selected' : ''}>New</option>
                    <option value="pending" ${booking.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="confirmed" ${booking.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                    <option value="cancelled" ${booking.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                </select>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Payment Status', 'ktd-booking-manager'); ?></label>
                <select id="ktd-edit-payment-status" class="regular-text">
                    <option value="pending" ${booking.payment_status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="paid" ${booking.payment_status === 'paid' ? 'selected' : ''}>Paid</option>
                    <option value="failed" ${booking.payment_status === 'failed' ? 'selected' : ''}>Failed</option>
                </select>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Internal Notes', 'ktd-booking-manager'); ?></label>
                <textarea id="ktd-edit-internal-notes">${booking.internal_notes || ''}</textarea>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Message', 'ktd-booking-manager'); ?></label>
                <div>${booking.message || '-'}</div>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Source', 'ktd-booking-manager'); ?></label>
                <div>${booking.booking_source || '-'}</div>
            </div>
            <div class="ktd-booking-detail">
                <label><?php _e('Created', 'ktd-booking-manager'); ?></label>
                <div>${booking.created_at}</div>
            </div>
            <button class="button button-primary ktd-save-booking" data-id="${booking.id}"><?php _e('Save Changes', 'ktd-booking-manager'); ?></button>
        `;
        
        $('#ktd-modal-body').html(html);
    }
    
    /**
     * Update booking
     */
    function updateBooking(bookingId, data) {
        $.ajax({
            url: ktdAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: 'ktd_update_booking',
                nonce: ktdAdmin.nonce,
                id: bookingId,
                ...data
            },
            success: function(response) {
                if (response.success) {
                    alert('Booking updated successfully');
                    $('#ktd-booking-modal').hide();
                    loadBookings();
                } else {
                    alert('Error updating booking');
                }
            },
            error: function() {
                alert('Error updating booking');
            }
        });
    }
    
    /**
     * Delete booking
     */
    function deleteBooking(bookingId) {
        $.ajax({
            url: ktdAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: 'ktd_delete_booking',
                nonce: ktdAdmin.nonce,
                id: bookingId
            },
            success: function(response) {
                if (response.success) {
                    alert('Booking deleted successfully');
                    loadBookings();
                } else {
                    alert('Error deleting booking');
                }
            },
            error: function() {
                alert('Error deleting booking');
            }
        });
    }
    
})(jQuery);
