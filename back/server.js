//Modules and Globals
require('dotenv').config()
const express = require('express');
const app = express();

//PORT
app.listen(process.env.PORT, () => {
    console.log('listening on port 8080!')
});