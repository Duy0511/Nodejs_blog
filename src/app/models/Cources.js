const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Cources = new Schema({
    name :{type: String},
  description: String,
  image : String,
  creatDate: Date,
  updateAt : Date
});

module.exports = mongoose.model('Course',Cources)