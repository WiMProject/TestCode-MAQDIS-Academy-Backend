/**
 * Tugas 5 - API Sederhana dengan Express.js
 * REST API dengan MVC pattern dan best practices
 * Author: Wildan Miladji
 */

const express = require('express');
const apiController = require('./controllers/apiController');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.get('/', apiController.index);
app.get('/hello', apiController.hello);
app.post('/data', apiController.createData);
app.delete('/data', apiController.deleteData);
app.get('/setoran', apiController.getSetoran);

// Error handlers
app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`MAQDIS Academy API Server`);
    console.log(`Server: http://localhost:${PORT}`);
    console.log(`Ready to accept requests!`);
  });
}

module.exports = app;