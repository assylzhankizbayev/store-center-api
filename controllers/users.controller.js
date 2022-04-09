const UsersModel = require("../models/users.model");

class UsersController {
  async getUsers(req, res) {
    const result = await UsersModel.fetch();
    res.json(result);
  }

  async login(req, res) {
    const result = await UsersModel.login(req.body);

    if (result.success) {
      res.json(result);
    } else {
      res.status(400).json(result);
    }
  }
}

module.exports = new UsersController();
