const Db = require("../db");
const { getAll, getOne, addOne } = require("../utils/promisify");

class ShopModel {
  constructor(number, owner, square, electricityUsage) {
    this.number = number;
    this.owner = owner;
    this.square = square;
    this.electricityUsage = electricityUsage;
  }

  static async fetch() {
    const query = Db.execute("SELECT * FROM shop");
    return await getAll(query);
  }

  static async getShopByNumber(number) {
    const query = Db.execute("SELECT * FROM shop WHERE number = ?", [number]);
    const shop = await getOne(query);

    return shop.success && shop.result
      ? shop
      : { error: true, message: "shop not found" };
  }

  async save() {
    const query = Db.execute(
      `INSERT INTO shop (number, owner, square, electricityUsage) VALUES (?, ?, ?, ?)`,
      [this.number, this.owner, this.square, this.electricityUsage]
    );

    return await addOne(query);
  }

  async update() {
    const query = Db.execute(
      `
        UPDATE shop 
        SET 
          owner = ?, 
          square = ?, 
          electricityUsage = ?
        WHERE number = ?
      `,
      [this.owner, this.square, this.electricityUsage, this.number]
    );

    return await addOne(query);
  }
}

module.exports = ShopModel;
