const mongoose = require('mongoose')

async function connectdb(url) {
   return mongoose.connect(url)
}

module.exports = connectdb  

//{}export only objects like this
