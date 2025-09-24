# Tugas 5 - API Sederhana

REST API menggunakan Express.js dengan arsitektur MVC dan best practices.

## Features
- **MVC Architecture** - Controllers, Routes, Middleware terpisah
- **Error Handling** - Global error handler dan try-catch
- **Logging Middleware** - Request/response logging dengan timestamp
- **CORS Support** - Cross-origin resource sharing
- **Database Simulation** - In-memory data storage
- **Health Check** - Status endpoint untuk monitoring
- **404 Handler** - Proper error responses
- **Graceful Shutdown** - Clean server termination

## Project Structure
```
Tugas 5/
├── app.js              # Main application
├── controllers/
│   └── apiController.js # Business logic
├── routes/
│   └── api.js           # Route definitions
├── middleware/
│   └── logger.js        # Request logging
├── config/
│   └── database.js      # Data simulation
└── package.json
```

## API Endpoints

### Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API Information |
| GET | `/api/hello` | Welcome message |
| POST | `/api/data` | Create data |
| DELETE | `/api/data` | Delete all data |
| GET | `/api/setoran` | Get setoran data |
| GET | `/api/status` | Health check |

### 1. GET /api/hello
**Response:**
```json
{
  "status": "success",
  "message": "welcome to Maqdis Academy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "1.0.0"
}
```

### 2. POST /api/data
**Response:**
```json
{
  "data": 100,
  "status": "berhasil",
  "id": 1,
  "created_at": "2024-01-01T00:00:00.000Z"
}
```

### 3. DELETE /api/data
**Response:**
```json
{
  "data": 0,
  "status": "berhasil hapus",
  "deleted_count": 0,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### 4. GET /api/setoran
**Response:**
```json
{
  "message": "berhasil",
  "id_setoran": 58,
  "id_user": 3441,
  "id_juz": 30,
  "retrieved_at": "2024-01-01T00:00:00.000Z"
}
```

### 5. GET /api/status (Bonus)
**Response:**
```json
{
  "status": "healthy",
  "uptime": 123.456,
  "memory": {...},
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Installation & Running

```bash
cd "Tugas 5"
npm install
npm start
```

## Development
```bash
npm run dev  # With nodemon for auto-restart
```

## Testing Endpoints

```bash
# API Info
curl http://localhost:3000/

# Welcome message
curl http://localhost:3000/api/hello

# Create data
curl -X POST http://localhost:3000/api/data \
  -H "Content-Type: application/json"

# Delete data
curl -X DELETE http://localhost:3000/api/data

# Get setoran
curl http://localhost:3000/api/setoran

# Health check
curl http://localhost:3000/api/status
```

## Best Practices Implemented
- **Separation of Concerns** - MVC pattern
- **Error Handling** - Try-catch dan global handler
- **Middleware Usage** - Logging, CORS, parsing
- **Consistent Response Format** - Standardized JSON
- **HTTP Status Codes** - Proper status responses
- **Environment Variables** - PORT configuration
- **Graceful Shutdown** - Clean termination
- **Documentation** - Comprehensive API docs

## Author
Wildan Miladji