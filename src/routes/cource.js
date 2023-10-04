const express = require('express');
const router = express.Router();
const courceController = require('../app/controllers/CourceController');
router.get('/create', courceController.create);
// ra bảng để update
router.delete('/:id/delete', courceController.delete)
router.get('/update', courceController.update);
router.post('/stored', courceController.store);
// truyền đến trang chỉnh sửa
router.get('/:id/edit', courceController.edit)
// khi mà put lên thì nó sẽ nhảy vào link này và up dữ liệu lên
router.put('/:id/edit/update', courceController.update1)
router.get('/bin', courceController.bin)
router.patch('/:id/restore', courceController.restore)
router.get('/:slug', courceController.show);

// hàm gốc của router.use('/,function(req, res, next)
module.exports = router;
// xuất ra router để nó chỉ đường dẫn vào news
