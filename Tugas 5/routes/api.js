const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/apiController');

// API Routes
router.get('/hello', ApiController.getHello);
router.post('/data', ApiController.postData);
router.delete('/data', ApiController.deleteData);
router.get('/setoran', ApiController.getSetoran);

// Bonus routes
router.get('/status', ApiController.getStatus);

// 404 handler untuk routes yang tidak ditemukan
router.use('*', (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Endpoint not found",
    available_endpoints: [
      "GET /api/hello",
      "POST /api/data", 
      "DELETE /api/data",
      "GET /api/setoran",
      "GET /api/status"
    ]
  });
});

module.exports = router;