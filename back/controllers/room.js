const router = require('express').Router()
const db= require('../models')

//SHOW ALL ROOMS
router.get('/', (req, res) => {
    db.Room.find()
        .then((rooms) => {
            res.send(rooms)
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
          })
})

//CREATE NEW ROOM
router.post('/', async (req, res) => {
    const post = new db.Room({
        room: req.body.room,
        available: req.body.available,
        occupancy: req.body.occupancy,
        cost_per_night: req.body.cost_per_night
    })
    await db.Room.create(post)
    await post.save()
})

//get room by id
router.get('/:id', async (req, res) => {
  try {
    const data = await db.Room.findById(req.params.id);
    res.json(data)
  }
  catch(error) {
    res.status(500).json({message: error.message})
  }
});

//PUT: UPDATE Room
router.put('/:id', async(req,res)=>{
   try {
    const post = await db.Room.findOne({ _id: req.params.id })
    if (req.body.room) {
        post.room = req.body.room
    }
    if (req.body.available) {
        post.available = req.body.available
    }
    if (req.body.occupancy) {
        post.occupancy = req.body.occupancy
    }
    if (req.body.cost_per_night) {
        post.cost_per_night = req.body.cost_per_night
    }
    await post.save()
    res.send(post)
    }   
        catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
}
}) 
  
// Delete Room
router.delete('/:id', async (req,res)=> {
    try {
        const id = req.params.id;
         const data = await db.Room.findByIdAndDelete(id)
         res.send(`Room ${data.room} has been deleted...`)
        }
    catch (error) {
            res.status(400).json({ message: error.message})
        }
    })

module.exports = router