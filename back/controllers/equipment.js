const router = require('express').Router()
const db= require('../models')
const equipment = require('../models/equipment')


router.get('/', (req, res) => {
    db.Equipment.find()
        .then((equipment) => {
            res.send(equipment)
        }
        )
})

router.post('/', async (req, res) => {
    const equipment = await new db.Equipment(req.body).save()
    res.json(equipment)
})


// Delete equipment
router.delete('/:id', async (req,res)=> {
    const { id } = req.params
    await db.Equipment.findByIdAndDelete(id)   

    res.status(303).redirect('/equipment')
})




module.exports = router