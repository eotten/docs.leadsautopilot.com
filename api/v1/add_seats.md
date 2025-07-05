# Add Seats Endpoint

Create a new LinkedIn automation seat with credentials and configuration.

## Endpoint

```
POST /api/v1/add_seats
```

## Authentication

✅ **Authentication required** - Bearer token in Authorization header.

```
Authorization: Bearer <your-webhook-auth-token>
```

## Description

This endpoint creates a new LinkedIn automation seat with the provided credentials and configuration. Upon creation, it automatically initiates verification of the LinkedIn credentials through the verification webhook.

## Request

### HTTP Method
`POST`

### Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Authorization` | ✅ | Bearer token for authentication |
| `Content-Type` | ✅ | Must be `application/json` |

### Request Body

The request body should contain a `body` object with the seat configuration:

```json
{
  "body": {
    "user_id": "11111111-1111-1111-1111-111111111111",
    "name": "James Smith",
    "li_email": "jamessmith123@gmail.com",
    "li_pass": "SuperPass123",
    "li_secret_key": "A9182lkaj",
    "autolikes_enabled": true,
    "daily_limit": 3000,
    "feed_url": "https://www.linkedin.com/feed/",
    "allowed_languages": ["en"],
    "blacklisted_usernames": [],
    "blacklisted_keywords": [],
    "start_time": null,
    "engagement_delay_minutes": 60,
    "days_enabled": {
      "friday": true,
      "monday": true,
      "sunday": true,
      "tuesday": true,
      "saturday": true,
      "thursday": true,
      "wednesday": true
    },
    "connection_level_first": true,
    "connection_level_second": true,
    "connection_level_third": true,
    "recency_limit": 60
  }
}
```

#### Request Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_id` | string | ✅ | UUID of the user who owns this seat |
| `name` | string | ✅ | Display name for the LinkedIn account |
| `li_email` | string | ✅ | LinkedIn login email |
| `li_pass` | string | ✅ | LinkedIn login password |
| `li_secret_key` | string | ❌ | 2FA secret key (if 2FA is enabled) |
| `autolikes_enabled` | boolean | ✅ | Whether autolikes are enabled |
| `daily_limit` | number | ✅ | Maximum interactions per day |
| `feed_url` | string | ✅ | LinkedIn feed or search URL to target |
| `allowed_languages` | array | ✅ | Array of language codes (e.g., ["en", "es"]) |
| `blacklisted_usernames` | array | ✅ | Usernames to avoid interacting with |
| `blacklisted_keywords` | array | ✅ | Keywords to avoid in posts/comments |
| `start_time` | string/null | ✅ | Daily start time (ISO format) or null |
| `engagement_delay_minutes` | number | ✅ | Delay between interactions with same user |
| `days_enabled` | object | ✅ | Days of week when automation is active |
| `connection_level_first` | boolean | ✅ | Interact with 1st degree connections |
| `connection_level_second` | boolean | ✅ | Interact with 2nd degree connections |
| `connection_level_third` | boolean | ✅ | Interact with 3rd+ degree connections |
| `recency_limit` | number | ✅ | Maximum age of posts to interact with (seconds) |

## Response

### Success Response (200 OK)

```json
{
  "success": true,
  "message": "Seat created successfully",
  "seatId": "12345678-1234-1234-1234-123456789012",
  "data": {
    "id": "12345678-1234-1234-1234-123456789012",
    "user_id": "11111111-1111-1111-1111-111111111111",
    "linkedin_name": "James Smith",
    "autolikes_enabled": true,
    "verification_initiated": true
  }
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Operation success status |
| `message` | string | Success message |
| `seatId` | string | UUID of the created seat |
| `data.id` | string | Seat ID (same as seatId) |
| `data.user_id` | string | User ID who owns the seat |
| `data.linkedin_name` | string | Display name of the LinkedIn account |
| `data.autolikes_enabled` | boolean | Whether autolikes are enabled |
| `data.verification_initiated` | boolean | Whether verification was started |

### Error Responses

#### 400 Bad Request - Missing Required Fields

```json
{
  "error": "Missing required fields: user_id, name, li_email, li_pass"
}
```

#### 401 Unauthorized - Invalid Authentication

```json
{
  "error": "Invalid authentication token"
}
```

#### 405 Method Not Allowed

```json
{
  "error": "Method not allowed"
}
```

#### 500 Internal Server Error

```json
{
  "error": "Failed to create seat"
}
```

## Examples

### cURL

```bash
curl -X POST https://yourdomain.com/api/v1/add_seats \
  -H "Authorization: Bearer your-webhook-auth-token" \
  -H "Content-Type: application/json" \
  -d '{
    "body": {
      "user_id": "11111111-1111-1111-1111-111111111111",
      "name": "James Smith",
      "li_email": "jamessmith123@gmail.com",
      "li_pass": "SuperPass123",
      "li_secret_key": "A9182lkaj",
      "autolikes_enabled": true,
      "daily_limit": 3000,
      "feed_url": "https://www.linkedin.com/feed/",
      "allowed_languages": ["en"],
      "blacklisted_usernames": [],
      "blacklisted_keywords": [],
      "start_time": null,
      "engagement_delay_minutes": 60,
      "days_enabled": {
        "friday": true,
        "monday": true,
        "sunday": true,
        "tuesday": true,
        "saturday": true,
        "thursday": true,
        "wednesday": true
      },
      "connection_level_first": true,
      "connection_level_second": true,
      "connection_level_third": true,
      "recency_limit": 60
    }
  }'
```

### JavaScript (fetch)

```javascript
const response = await fetch('https://yourdomain.com/api/v1/add_seats', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-webhook-auth-token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    body: {
      user_id: "11111111-1111-1111-1111-111111111111",
      name: "James Smith",
      li_email: "jamessmith123@gmail.com",
      li_pass: "SuperPass123",
      li_secret_key: "A9182lkaj",
      autolikes_enabled: true,
      daily_limit: 3000,
      feed_url: "https://www.linkedin.com/feed/",
      allowed_languages: ["en"],
      blacklisted_usernames: [],
      blacklisted_keywords: [],
      start_time: null,
      engagement_delay_minutes: 60,
      days_enabled: {
        friday: true,
        monday: true,
        sunday: true,
        tuesday: true,
        saturday: true,
        thursday: true,
        wednesday: true
      },
      connection_level_first: true,
      connection_level_second: true,
      connection_level_third: true,
      recency_limit: 60
    }
  })
});

const data = await response.json();
console.log(data);
```

### Python (requests)

```python
import requests

url = "https://yourdomain.com/api/v1/add_seats"
headers = {
    "Authorization": "Bearer your-webhook-auth-token",
    "Content-Type": "application/json"
}

data = {
    "body": {
        "user_id": "11111111-1111-1111-1111-111111111111",
        "name": "James Smith",
        "li_email": "jamessmith123@gmail.com",
        "li_pass": "SuperPass123",
        "li_secret_key": "A9182lkaj",
        "autolikes_enabled": True,
        "daily_limit": 3000,
        "feed_url": "https://www.linkedin.com/feed/",
        "allowed_languages": ["en"],
        "blacklisted_usernames": [],
        "blacklisted_keywords": [],
        "start_time": None,
        "engagement_delay_minutes": 60,
        "days_enabled": {
            "friday": True,
            "monday": True,
            "sunday": True,
            "tuesday": True,
            "saturday": True,
            "thursday": True,
            "wednesday": True
        },
        "connection_level_first": True,
        "connection_level_second": True,
        "connection_level_third": True,
        "recency_limit": 60
    }
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

## Behavior

1. **Seat Creation**: Creates a new seat record in the database
2. **Credential Storage**: Securely stores LinkedIn credentials
3. **Verification**: Automatically initiates LinkedIn credential verification
4. **Configuration**: Sets up automation parameters and filters
5. **Response**: Returns seat ID and confirmation of creation

## Notes

- The `li_secret_key` field is optional and only needed if 2FA is enabled on the LinkedIn account
- The verification process is asynchronous - the seat is created immediately but verification happens in the background
- All array fields (`allowed_languages`, `blacklisted_usernames`, `blacklisted_keywords`) are stored as JSON strings in the database
- The `recency_limit` is combined with a default minimum of 60 seconds to create a range `[60, recency_limit]`
- Connection levels are stored as an object with `first`, `second`, and `third` boolean properties
- The verification webhook is called at `https://n8nflows.leadsautopilot.com/webhook/verify_li`

## Security

- All credentials are stored securely in the database
- Authentication tokens are validated against the profiles table
- Passwords are handled securely but ensure your LinkedIn credentials are strong
- The API does not log sensitive information like passwords or tokens 