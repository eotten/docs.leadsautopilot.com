# Health Check Endpoint

Check the health and status of the API service.

## Endpoint

```
GET /api/v1/health
```

## Authentication

❌ **No authentication required** - This is a public endpoint.

## Description

This endpoint provides a health check for the API service. It returns basic information about the service status, uptime, and environment. This endpoint is useful for monitoring, load balancer health checks, and debugging.

## Request

### HTTP Method
`GET`

### Headers
No special headers required.

### Parameters
None

## Response

### Success Response (200 OK)

```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "1.0.0",
  "uptime": 1234.567,
  "environment": "production",
  "service": "autopilot-ui-nexus-api"
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Health status ("healthy" or "unhealthy") |
| `timestamp` | string | ISO 8601 timestamp of the response |
| `version` | string | API version |
| `uptime` | number | Process uptime in seconds |
| `environment` | string | Environment (production, development, etc.) |
| `service` | string | Service name |

### Error Response (500 Internal Server Error)

```json
{
  "status": "unhealthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "error": "Internal server error"
}
```

## Examples

### cURL

```bash
curl -X GET https://yourdomain.com/api/v1/health
```

### JavaScript (fetch)

```javascript
fetch('https://yourdomain.com/api/v1/health')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Python (requests)

```python
import requests

response = requests.get('https://yourdomain.com/api/v1/health')
print(response.json())
```

## Use Cases

- **Monitoring**: Automated health checks for service monitoring
- **Load Balancers**: Health check configuration for load balancers
- **DevOps**: Integration with monitoring and alerting systems
- **Development**: Quick verification that the API is running
- **Debugging**: Troubleshooting deployment issues

## Notes

- This endpoint should always return a 200 status code when the service is running
- The `uptime` field shows how long the current process has been running
- This endpoint does not perform database connectivity checks
- Response time should be minimal as no external services are called 