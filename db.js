const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'store_center_db',
});

const promisePool = pool.promise();

class Db {
  static async test() {
    const [rows] = await promisePool.execute('SELECT * FROM users');
    return rows;
  }

  static execute(query, params = []) {
    return promisePool.execute(query, params);
  }
}

module.exports = Db;
