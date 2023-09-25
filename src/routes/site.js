const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
router.use('/search', siteController.search);
router.use('/', siteController.index);
// phải để / ở cuối tại vì khi mà nó tìm thì nó chỉ tìm đến /.../ để ở trên đầu thì nó sẽ tìm /.../trang trước thì mới match đươc
// hàm gốc của router.use('/,function(req, res, next)
module.exports = router;
// xuất ra router để nó chỉ đường dẫn vào news
