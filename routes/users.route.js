const router = require('express').Router();
const usersController = require('../controllers/users.controller');

router.get('/', usersController.getUsers);
router.post('/login', usersController.login);

module.exports = router;