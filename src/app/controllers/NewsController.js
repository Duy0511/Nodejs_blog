class NewsController {
  //[GET] /news
  index(req, res) {
    res.render('news');
  }
  show(req, res) {
    res.send('Hello');
  }
}

module.exports = new NewsController();
// module.exports này là để xuất ra ngoài để tý require
