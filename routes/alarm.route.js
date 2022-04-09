const router = require('express').Router();
const alarmController = require('../controllers/alarm.controller');

router.get('/', alarmController.getAllAlarms);
router.post('/', alarmController.add);

module.exports = router;