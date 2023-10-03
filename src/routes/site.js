const express = require('express');
const router = express.Router();
const courceController = require('../app/controllers/CourceController');
const siteController = require('../app/controllers/SiteController');
router.get('/search', siteController.search);
router.get('/', siteController.index);
// phải để / ở cuối tại vì khi mà nó tìm thì nó chỉ tìm đến /.../ để ở trên đầu thì nó sẽ tìm /.../trang trước thì mới match đươc
// hàm gốc của router.use('/,function(req, res, next)
module.exports = router;
// xuất ra router để nó chỉ đường dẫn vào news
