const ShopModel = require("../models/shop.model");

class ShopController {
  async getAllShops(req, res) {
    const result = await ShopModel.fetch();
    res.json(result);
  }

  async getShopByNumber(req, res) {
    const result = await ShopModel.getShopByNumber(req.params.number);
    res.json(result);
  }

  async addShop(req, res) {
    const number = req.body.number;
    const owner = req.body.owner;
    const square = req.body.square;
    const electricityUsage = req.body.electricityUsag;

    const shopModel = new ShopModel(number, owner = null, square = null, electricityUsage);
    const result = await shopModel.save();
    res.json(result);
  }

  async updateShop(req, res) {
    const number = req.body.number;
    const owner = req.body.owner;
    const square = req.body.square;
    const electricityUsage = req.body.electricityUsage;

    const shopModel = new ShopModel(number, owner, square, electricityUsage);
    const result = await shopModel.update();
    res.json(result);
  }
}

module.exports = new ShopController();
