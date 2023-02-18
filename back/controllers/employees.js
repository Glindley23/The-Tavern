const router = require('express').Router()
//const Employees  = require('../../front/src/Components/Employees')
//const employees = require('../models/employee')
const db= require('../models')

router.get('/', (req, res) => {
    db.Employee.find()
        .then((employees) => {
            res.send(employees)
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
          })
})

router.post('/', (req, res) => {
    db.Employee.create(req.body)
    .then (() =>
        res.redirect('/employees')
) 
})


//get by id
router.get('/:id', async (req, res) => {
  try {
    const data = await db.Employee.findById(req.params.id);
    res.json(data)
  }
  catch(error) {
    res.status(500).json({message: error.message})
  }
});

//PUT:
router.put('/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await db.Employee.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
  
   })
  
    // Delete employee
      router.delete('/:id', async (req,res)=> {
        try {
            const id = req.params.id;
            const data = await db.Employee.findByIdAndDelete(id)
            res.send(`Employee with ${data.name} has been deleted...`)
        }
        catch (error) {
            res.status(400).json({ message: error.message})
        }
    })
          
      


module.exports = router