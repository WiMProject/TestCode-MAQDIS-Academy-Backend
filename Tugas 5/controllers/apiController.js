const db = require('../config/database');

class ApiController {
  // GET /hello
  static getHello(req, res) {
    try {
      res.status(200).json({
        status: "success",
        message: "welcome to Maqdis Academy",
        timestamp: new Date().toISOString(),
        version: "1.0.0"
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Internal server error"
      });
    }
  }

  // POST /data
  static postData(req, res) {
    try {
      const newData = db.addData({ value: 100 });
      
      res.status(201).json({
        data: 100,
        status: "berhasil",
        id: newData.id,
        created_at: newData.created_at
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Failed to create data"
      });
    }
  }

  // DELETE /data
  static deleteData(req, res) {
    try {
      const result = db.clearData();
      
      res.status(200).json({
        data: 0,
        status: "berhasil hapus",
        deleted_count: result.deleted_count,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Failed to delete data"
      });
    }
  }

  // GET /setoran
  static getSetoran(req, res) {
    try {
      const setoran = db.getSetoran();
      
      res.status(200).json({
        message: "berhasil",
        id_setoran: setoran.id_setoran,
        id_user: setoran.id_user,
        id_juz: setoran.id_juz,
        retrieved_at: new Date().toISOString()
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve setoran data"
      });
    }
  }

  // GET /status - Bonus endpoint untuk health check
  static getStatus(req, res) {
    res.status(200).json({
      status: "healthy",
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString()
    });
  }
}

module.exports = ApiController;