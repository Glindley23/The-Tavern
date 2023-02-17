//Modules and Globals
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override')
const mongoose = require ('mongoose')
const db = require('./models')

const app = express();


//PORT
app.listen(process.env.PORT, () => {
    console.log('listening on port 3001!')
});

app.get('/drinks', (req,res) => {
    db.Drink.find()
    .then((drinks) => {
        res.status(200).json(drinks)
    })
    .catch(err => {
        console.log('err', err)
        res.status(400).json(err)
    })
})
    
    
