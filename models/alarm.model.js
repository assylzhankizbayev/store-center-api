const Db = require("../db");
const { getAll, getOne } = require("../utils/promisify");

class AlarmModel {
  constructor(type, number) {
    this.type = type;
    this.number = number;
  }

  static async fetch() {
    const query = Db.execute("SELECT * FROM alarm");
    return await getAll(query);
  }

  async save() {
    const query = Db.execute(`INSERT INTO alarm (type, number) VALUES (?, ?)`, [
      this.type,
      this.number,
    ]);

    return await addOne(query);
  }
}

module.exports = AlarmModel;
