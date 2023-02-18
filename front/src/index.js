
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
//const methodOverride = require('method-override')
const mongoose = require('mongoose')
//const express = require('express')

//const app = express()

// MIDDLEWARE - has to sit between app declaration and app.use - dont put below route
//app.use(express.urlencoded({ extended: true }))
//app.use(express.static('public'))
//app.set('views', __dirname + '/views')
//app.set('view engine', 'jsx')
//app.engine('jsx', require('express-react-views').createEngine())
//app.use(methodOverride('_method'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

mongoose.set('strictQuery', true)
// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

