const express = require('express');
const logger = require('./middleware/logger');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: "MAQDIS Academy API",
    version: "1.0.0",
    author: "Wildan Miladji",
    endpoints: {
      hello: "GET /api/hello",
      data_create: "POST /api/data",
      data_delete: "DELETE /api/data", 
      setoran: "GET /api/setoran",
      status: "GET /api/status"
    },
    documentation: "See README.md for detailed API documentation"
  });
});

// API Routes
app.use('/api', apiRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
    suggestion: "Try GET / for available endpoints"
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\nMAQDIS Academy API Server`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Base URL: http://localhost:${PORT}`);
    console.log(`\nAvailable endpoints:`);
    console.log(`   GET    /                    - API Info`);
    console.log(`   GET    /api/hello           - Welcome message`);
    console.log(`   POST   /api/data            - Create data`);
    console.log(`   DELETE /api/data            - Delete data`);
    console.log(`   GET    /api/setoran         - Get setoran`);
    console.log(`   GET    /api/status          - Health check`);
    console.log(`\nReady to accept requests!\n`);
  });
}

module.exports = app;