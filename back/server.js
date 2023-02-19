//Modules and Globals
require('dotenv').config()
const express = require('express');
//const methodOverride = require('method-override')
const mongoose = require ('mongoose')
const db = require('./models')

const app = express();

//MIDDLEWARE
app.use(express.json())

// Controllers & Routes
app.use('/employees', require('./controllers/employees'))
app.use('/equipment', require('./controllers/equipment'))

//PORT
app.listen(process.env.PORT, () => {
    console.log('listening on port 8080!')
});

app.get('/drinks', (req,res) => {
    db.Drink.find()
    .then((drinks) => {
        
        res.status(200).send(drinks)
    })
    .catch(err => {
        console.log('err', err)
        res.status(400).json(err)
    })
})
    
    
