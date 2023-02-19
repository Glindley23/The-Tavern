//Modules and Globals
require('dotenv').config()
const bodyParser = require('body-parser')
const pino = require('express-pino-logger')();
const express = require('express');
//const methodOverride = require('method-override')
const mongoose = require ('mongoose')
const db = require('./models')
const cors = require('cors')
const app = express();

//MIDDLEWARE
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json())

// Controllers & Routes
app.use('/employees', require('./controllers/employees'))
app.use('/equipment', require('./controllers/equipment'))
app.use('/food', require('./controllers/food'))
app.use('/quest', require('./controllers/quest'))
app.use('/room', require('./controllers/room'))
app.use('/drink',require('./controllers/drink'))

app.get('/api/greeting', (req,res) => {
    const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
})

//PORT
app.listen(process.env.PORT, () => {
    console.log('listening on port 8080!')
});    
    