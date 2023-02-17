
const Drink = require('../models/drink')
const router = require('express').Router()
const db = require('../models')


//GET:get all drinks
router.get('/', (req, res) => {
    db.Drink.find()
    .then((drink)=>{
      res.render({drink})
    })
    .catch(err=>{
      console.log(err)
      res.render('error404')
    })
    
  })

  // GET: Add a new drink
  router.post('/new', async(req,res)=>{
    const drink = await Drink.find()
    res.render('new',{
        drinks
    })
  })

  //Delete

  router.get('/data/delete', async(req,res)=>{
    await Drink.deleteMany()
    res.redirect('/drink')
  })


  module.exports= router