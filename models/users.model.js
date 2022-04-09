const Db = require("../db");
const { getAll, getOne } = require("../utils/promisify");

class UsersModel {
  static async fetch() {
    const query = Db.execute("SELECT * FROM users");
    return await getAll(query);
  }

  static async login({ phone, password }) {
    const query = Db.execute("SELECT * FROM users WHERE phone = ?", [phone]);
    const user = await getOne(query);

    return user.success && user.result.password === password
      ? user
      : { error: true, message: "password not correct" };
  }
}

module.exports = UsersModel;
