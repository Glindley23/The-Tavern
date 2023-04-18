const router = require('express').Router()
const db= require('../models')

//SHOW ALL Quests
router.get('/', (req, res) => {
    db.Quest.find()
        .then((quests) => {
            res.send(quests)
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
          })
})

//CREATE NEW Quest
router.post('/', async (req, res) => {
    const post = new db.Quest({
        name: req.body.name,
        description: req.body.description,
        pay: req.body.pay,
        status: req.body.status,
    })
    await db.Quest.create(post)
    await post.save()
})

//get quest by id
router.get('/:id', async (req, res) => {
  try {
    const data = await db.Quest.findById(req.params.id);
    res.json(data)
  }
  catch(error) {
    res.status(500).json({message: error.message})
  }
});

//PUT: UPDATE Quest
router.put('/:id', async(req,res)=>{
   try {
    const post = await db.Quest.findOne({ _id: req.params.id })
    if (req.body.name) {
        post.name = req.body.name
    }
    if (req.body.description) {
        post.description = req.body.description
    }
    if (req.body.pay) {
        post.pay = req.body.pay
    }
    if (req.body.status) {
        post.status = req.body.status
    }
    await post.save()
    res.send(post)
    }   
        catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
}
}) 
  
// Delete Quest
router.delete('/:id', async (req,res)=> {
    try {
        const id = req.params.id;
        const data = await db.Quest.findByIdAndDelete(id)
        res.send(`Quest ${data.name} has been deleted...`)
        }
    catch (error) {
        res.status(400).json({ message: error.message})
        }
    })

module.exports = router