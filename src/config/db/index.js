// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education');
    }catch(error){
        console.log('Error !!!!')
    }
}
module.exports = {connect}