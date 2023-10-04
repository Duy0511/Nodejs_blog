const Cources = require('../models/Cources');
const { monoToObject,multipleToObject } = require('../multi/ToObject.js');


class CourceController {
  show(req, res, next) {
    Cources.findOne({ slug: req.params.slug })
      .then((cource) => {
        res.render('cources/cource', { cource: monoToObject(cource) });
        // phải render trang mà phải có cả :slug nữa chứ
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render('cources/create');
  }
  store(req, res, next) {
    const formData = req.body
    formData.create = Date();
    const videoLink = formData.videoLink
    function getID(){
      if(videoLink.indexOf('&') > 0){
        return videoLink.substring(videoLink.indexOf('=')+1, videoLink.lastIndexOf('&'))
        }else{
        return videoLink.substring(videoLink.indexOf('=')+1, videoLink.length)
        }
    }
    formData.videoId = getID()
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const newCource = new Cources(formData);
    newCource.save().then(()=>res.redirect('/'))
    
  }
  update(req, res, next) {
    Cources.find({})
      .then((cources) => {
        res.render('cources/update', { cources: multipleToObject(cources) });
      })
      .catch(next);
  }
  edit(req, res, next) {
    Cources.findOne({ _id: req.params.id})
      .then((cource) => {
        res.render('cources/stored-cource', { cource: monoToObject(cource) });
        // phải render trang mà phải có cả :slug nữa chứ
      })
      .catch(next);
  }
  update1(req, res, next) {
    Cources.findByIdAndUpdate(req.params.id,req.body)
      .then(() => {
        res.redirect('/');
        // phải render trang mà phải có cả :slug nữa chứ
      })
      .catch(next);
  }
  delete(req, res, next) {
    Cources.delete({_id : req.params.id})
    .then(() => {
      res.redirect('back');
    })
    .catch(next);
  }
  bin(req, res, next) {
    Cources.findDeleted({})
    .then((cources) => {
      res.render('cources/bin',{ cources: multipleToObject(cources) });
    })
    .catch(next);
  }
  restore(req, res, next) {
    Cources.findOneDeleted({_id : req.params.id})
    .then((cource)=>{
      cource.restore()
      res.redirect('back')
    })
    .catch(next)
  }
}

module.exports = new CourceController();
