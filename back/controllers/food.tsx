const router = require('express').Router()
const db= require('../models')

//SHOW ALL FOOD
router.get('/', (req, res) => {
    db.Food.find()
        .then((food) => {
            res.send(food)
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
          })
})

//CREATE NEW FOOD
router.post('/', async (req, res) => {
    const post = new db.Food({
        name: req.body.name,
        amount_in_stock: req.body.amount_in_stock,
        cost_to_buy: req.body.cost_to_buy,
        sell_price: req.body.sell_price,
    })
    await db.Food.create(post)
    await post.save()
    res.send(post)
})

//get food by id
router.get('/:id', async (req, res) => {
  try {
    const data = await db.Food.findById(req.params.id);
    res.json(data)
  }
  catch(error) {
    res.status(500).json({message: error.message})
  }
});

//PUT: UPDATE FOOD
router.put('/:id', async(req,res)=>{
   try {
    const post = await db.Food.findOne({ _id: req.params.id })
    if (req.body.name) {
        post.name = req.body.name
    }
    if (req.body.amount_in_stock) {
        post.amount_in_stock = req.body.amount_in_stock
    }
    if (req.body.cost_to_buy) {
        post.cost_to_buy = req.body.cost_to_buy
    }
    if (req.body.sell_price) {
        post.sell_price = req.body.sell_price
    }
    await post.save()
    res.send(post)
    }   
        catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
}
}) 
// Delete Food
    router.delete('/:id', async (req,res)=> {
    try {
        const id = req.params.id;
        const data = await db.Food.findByIdAndDelete(id)
        res.send(`${data.name} has been deleted...`)
        }
    catch (error) {
         res.status(400).json({ message: error.message})
        }
    })

module.exports = router