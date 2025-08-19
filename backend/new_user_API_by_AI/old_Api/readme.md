
# User Management API

## Overview

This is the **User Management API** that allows for managing users within the platform. The API provides endpoints for user registration, login, deletion, and updating user details.

## Base URL

The base URL for all API requests is:

```
http://localhost:9000
```

## Endpoints

### 1. `GET /user`

Retrieve a list of all users.

#### Request

- Method: `GET`
- URL: `/user`

#### Response

- Status: `200 OK`
- Body (example):
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
]
```

#### Example

```bash
curl -X GET "http://localhost:9000/user"
```

---

### 2. `POST /user/register`

Register a new user.

#### Request

- Method: `POST`
- URL: `/user/register`
- Headers:
  - `Content-Type: application/json`
- Body:
```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "password": "securePassword123"
}
```

#### Response

- Status: `201 Created`
- Body:
```json
{
  "id": 3,
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
```

#### Example

```bash
curl -X POST "http://localhost:9000/user/register" -H "Content-Type: application/json" -d '{"name": "Jane Doe", "email": "jane.doe@example.com", "password": "securePassword123"}'
```

---

### 3. `POST /user/login`

Login an existing user.

#### Request

- Method: `POST`
- URL: `/user/login`
- Headers:
  - `Content-Type: application/json`
- Body:
```json
{
  "email": "john.doe@example.com",
  "password": "userPassword123"
}
```

#### Response

- Status: `200 OK`
- Body:
```json
{
  "message": "Login successful",
  "token": "JWT_Token_Generated"
}
```

#### Example

```bash
curl -X POST "http://localhost:9000/user/login" -H "Content-Type: application/json" -d '{"email": "john.doe@example.com", "password": "userPassword123"}'
```

---

### 4. `DELETE /user/delete`

Delete a user by their `id`.

#### Request

- Method: `DELETE`
- URL: `/user/delete`
- Headers:
  - `Content-Type: application/json`
- Body:
```json
{
  "id": 1
}
```

#### Response

- Status: `204 No Content`
- Body: None

#### Example

```bash
curl -X DELETE "http://localhost:9000/user/delete" -H "Content-Type: application/json" -d '{"id": 1}'
```

---

### 5. `PATCH /user/update`

Update an existing user's details.

#### Request

- Method: `PATCH`
- URL: `/user/update`
- Headers:
  - `Content-Type: application/json`
- Body:
```json
{
  "id": 2,
  "name": "Jane Smith Updated",
  "email": "jane.smith.updated@example.com"
}
```

#### Response

- Status: `200 OK`
- Body:
```json
{
  "id": 2,
  "name": "Jane Smith Updated",
  "email": "jane.smith.updated@example.com"
}
```

#### Example

```bash
curl -X PATCH "http://localhost:9000/user/update" -H "Content-Type: application/json" -d '{"id": 2, "name": "Jane Smith Updated", "email": "jane.smith.updated@example.com"}'
```

---

## Error Handling

The API will return different HTTP status codes depending on the result of the request.

- **400 Bad Request**: The request was invalid or missing required parameters.
- **401 Unauthorized**: Authentication failed or was not provided.
- **404 Not Found**: The requested resource (e.g., user) could not be found.
- **500 Internal Server Error**: A generic error occurred on the server.

Example of a 400 response:
```json
{
  "error": "Invalid email format."
}
```

---

## Rate Limiting

The API allows up to **100 requests per minute** per user. If you exceed this limit, you will receive a `429 Too Many Requests` status.

Example of rate limit exceeded response:
```json
{
  "error": "Rate limit exceeded. Please try again later."
}
```

---

## Contact

For support, contact us at [support@solutionsphere.com](mailto:support@solutionsphere.com).

---

## License

This API is licensed under the [MIT License](LICENSE).
