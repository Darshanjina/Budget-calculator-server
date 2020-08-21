var express = require('express');
var router = express.Router();
var verify = require('../controller/Budget.controller');
var userController = require('../controller/User.controller');

router.get('/budget-select',verify.select);
router.post('/budget-insert',verify.insert);
// router.post('/budget-update',verify.update);
router.post('/budget-remove',verify.remove);

router.post('/insert-user',userController.userInsert);
router.post('/verify-user',userController.verifyUser);

module.exports = router;