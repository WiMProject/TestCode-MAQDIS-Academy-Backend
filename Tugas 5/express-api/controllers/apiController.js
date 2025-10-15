/**
 * API Controller untuk Express.js
 * Author: Wildan Miladji
 */

class ApiController {
  
  // Root endpoint
  static index(req, res) {
    res.json({
      message: "MAQDIS Academy API (Express)",
      version: "1.0.0",
      author: "Wildan Miladji",
      endpoints: {
        hello: "GET /hello",
        data_create: "POST /data",
        data_delete: "DELETE /data",
        setoran: "GET /setoran"
      }
    });
  }

  // GET /hello
  static hello(req, res) {
    res.json({
      status: "success",
      message: "welcome to Maqdis Academy"
    });
  }

  // POST /data
  static createData(req, res) {
    res.status(201).json({
      data: 100,
      status: "berhasil"
    });
  }

  // DELETE /data
  static deleteData(req, res) {
    res.json({
      data: 0,
      status: "berhasil hapus"
    });
  }

  // GET /setoran
  static getSetoran(req, res) {
    res.json({
      message: "berhasil",
      id_setoran: 58,
      id_user: 3441,
      id_juz: 30
    });
  }
}

module.exports = ApiController;