# KTD Booking Manager

A WordPress plugin for managing bookings with a dashboard interface and email notifications.

## Features

- **Admin Dashboard**: View and manage all bookings in one place
- **Booking Management**: View, edit, update status, and delete bookings
- **REST API**: External API endpoints for integrating with external forms
- **Email Notifications**: Automatic email notifications for new bookings
- **Status Tracking**: Track booking status (new, pending, confirmed, cancelled)
- **Payment Tracking**: Track payment status (pending, paid, failed)
- **Search & Filter**: Search bookings by name, email, or course
- **Pagination**: Handle large numbers of bookings efficiently

## Installation

1. Upload the `ktd-booking-manager` folder to your WordPress plugins directory:
   ```
   wp-content/plugins/ktd-booking-manager/
   ```

2. Or upload the ZIP file via WordPress Admin:
   - Go to Plugins → Add New
   - Click "Upload Plugin"
   - Select the ZIP file
   - Click "Install Now"

3. Activate the plugin:
   - Go to Plugins
   - Find "KTD Booking Manager"
   - Click "Activate"

## Configuration

1. After activation, go to **KTD Bookings → Settings**
2. Configure your notification email address
3. Enable/disable email notifications
4. Copy the API key for use in your external forms

## API Endpoints

### Create Booking
```
POST /wp-json/ktd/v1/bookings/create
```

**Request Body:**
```json
{
  "api_key": "your-api-key",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "course_title": "Open Water Diver",
  "item_type": "Course",
  "message": "I want to book for next month",
  "total_amount": 5000000,
  "deposit_amount": 500000,
  "booking_source": "prodiving.asia",
  "source_page": "https://prodiving.asia/courses"
}
```

### Get Bookings
```
GET /wp-json/ktd/v1/bookings
```

**Headers:**
```
X-API-Key: your-api-key
```

**Query Parameters:**
- `page`: Page number (default: 1)
- `per_page`: Items per page (default: 20)
- `status`: Filter by status (new, pending, confirmed, cancelled)
- `search`: Search by name, email, or course

### Update Booking
```
PATCH /wp-json/ktd/v1/bookings/{id}
```

**Headers:**
```
X-API-Key: your-api-key
```

**Request Body:**
```json
{
  "status": "confirmed",
  "payment_status": "paid",
  "internal_notes": "Customer paid deposit"
}
```

### Delete Booking
```
DELETE /wp-json/ktd/v1/bookings/{id}
```

**Headers:**
```
X-API-Key: your-api-key
```

## React Integration Example

```javascript
const submitBooking = async (bookingData) => {
  const response = await fetch('https://admin.prodiving.asia/wp-json/ktd/v1/bookings/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: 'your-api-key',
      ...bookingData
    }),
  });
  
  const result = await response.json();
  return result;
};
```

## Database Schema

The plugin creates a custom table `wp_ktd_bookings` with the following fields:

- `id`: Primary key
- `name`: Customer name
- `email`: Customer email
- `phone`: Phone number
- `course_title`: Course name
- `item_type`: Type of booking
- `status`: Booking status (new, pending, confirmed, cancelled)
- `payment_status`: Payment status (pending, paid, failed)
- `total_amount`: Total booking amount
- `deposit_amount`: Deposit amount
- `message`: Customer message
- `internal_notes`: Admin notes
- `booking_source`: Source of booking
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

## Support

For support, contact One Media Asia at https://onemedia.asia

## License

GPL v2 or later
