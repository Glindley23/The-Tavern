require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
//connect to database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')