const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');
router.use('/:slug', newsController.show);
router.use('/', newsController.index);
// hàm gốc của router.use('/,function(req, res, next)
module.exports = router;
// xuất ra router để nó chỉ đường dẫn vào news
