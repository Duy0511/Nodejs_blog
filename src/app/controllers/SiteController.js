const Cources = require('../models/Cources');
const { multipleToObject } = require('../multi/ToObject.js');
class SiteController {
  //[GET] /news
  index(req, res) {
    Cources.find({})
      .then((cources) => {
        cources = multipleToObject(cources); // chuyển thành object constructor thành object
        res.render('home', { cources });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  }
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
