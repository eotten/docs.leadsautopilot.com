---
layout: docs
title: API v1 Documentation
description: Complete API v1 reference for LeadsAutopilot's automation features
---

# API Documentation v1

Welcome to the Autopilot UI Nexus API v1 documentation.

## Base URL

```
https://yourdomain.com/api/v1
```

## Authentication

Most endpoints require authentication using a Bearer token in the `Authorization` header:

```
Authorization: Bearer <your-webhook-auth-token>
```

The token must match a `webhook_auth_token` in the profiles table.

## Content Type

All requests should use `application/json` content type:

```
Content-Type: application/json
```

## Response Format

All responses are returned in JSON format with consistent structure:

### Success Response
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { ... }
}
```

### Error Response
```json
{
  "error": "Error description",
  "status": 400
}
```

## Status Codes

| Code | Description |
|------|-------------|
| 200  | Success |
| 400  | Bad Request - Invalid parameters |
| 401  | Unauthorized - Invalid or missing authentication |
| 405  | Method Not Allowed - Invalid HTTP method |
| 500  | Internal Server Error - Server-side error |

## Available Endpoints

### Health Check
- **GET** `/health` - Check API health status (no auth required)
- [Documentation](./health.md)

### Seats Management
- **POST** `/add_seats` - Add new LinkedIn seats
- [Documentation](./add_seats.md)

## Rate Limiting

Currently, there are no rate limits implemented, but they may be added in future versions.

## Error Handling

All endpoints include comprehensive error handling with descriptive error messages. When an error occurs, the response will include:

- HTTP status code
- Error message describing what went wrong
- Additional context when available

## Support

For API support, please contact the development team or refer to the individual endpoint documentation for specific usage examples. 