// Simulasi database sederhana
class Database {
  constructor() {
    this.data = [];
    this.setoran = {
      id_setoran: 58,
      id_user: 3441,
      id_juz: 30,
      created_at: new Date().toISOString()
    };
  }

  addData(item) {
    const newItem = {
      id: this.data.length + 1,
      ...item,
      created_at: new Date().toISOString()
    };
    this.data.push(newItem);
    return newItem;
  }

  getData() {
    return this.data;
  }

  clearData() {
    this.data = [];
    return { deleted_count: this.data.length };
  }

  getSetoran() {
    return this.setoran;
  }
}

module.exports = new Database();