const router = require('express').Router();
const shopController = require('../controllers/shop.controller');

router.get('/', shopController.getAllShops);
router.get('/:number', shopController.getShopByNumber);
router.post('/', shopController.addShop);
router.put('/', shopController.updateShop);

module.exports = router;