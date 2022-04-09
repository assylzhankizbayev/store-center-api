const AlarmModel = require('../models/alarm.model');

class AlarmController {
  async getAllAlarms(req, res) {
    const result = await AlarmModel.fetch();
    res.json(result);
  }

  async add(req, res) {
    const alarm = new AlarmModel(req.body.type, req.body.number)
    const result = await alarm.save();
    res.json(result);
  }
}

module.exports = new AlarmController();