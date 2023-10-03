// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/f8_education');
    console.log('Connect Success');
  } catch (error) {
    console.log('Error !!!!');
  }
}
module.exports = { connect };
