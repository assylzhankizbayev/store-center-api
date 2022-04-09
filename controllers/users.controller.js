const UsersModel = require('../models/users.model');

class UsersController {
  async getUsers(req, res) {
    const result = await UsersModel.fetch();
    res.json(result);
  }

  async login(req, res) {
    const result = await UsersModel.login(req.body);
    res.json(result);
  }
}

module.exports = new UsersController();