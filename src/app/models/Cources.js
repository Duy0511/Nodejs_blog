const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Cource = new Schema({
  name: { type: String },
  description: String,
  videoId : String,
  image : String,
  create : {type: Date},
  slug: { type: String, slug: 'name', unique: true },
  videoLink: { type: String },
});

module.exports = mongoose.model('Cource', Cource);
//mongoose.model('ModelName', mySchema);
