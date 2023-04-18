require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
//connect to database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

module.exports.Drink = require('./drink')
module.exports.Employee = require('./employee')
module.exports.Equipment = require('./equipment')
module.exports.Food = require('./food')
module.exports.Quest = require('./quest')
module.exports.Room = require('./room')