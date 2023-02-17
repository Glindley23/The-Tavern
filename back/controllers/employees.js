const router = require('express').Router()
//const Employees  = require('../../front/src/Components/Employees')
//const employees = require('../models/employee')
const db= require('../models')

router.get('/', (req, res) => {
    db.Employee.find()
        .then((employees) => {
            res.send(employees)
        }
        )
})

router.post('/', async (req, res) => {
    const employees = await new Employees(req.body).save()
    res.json(employees)
})

//get by id
router.get('/employees/:id', async (req, res) => {
    const employees = await Employees.findById(id)
    const {id} = req.params
    res.json(employees)
  })

   //PUT:
   router.put('/:id', async(req,res)=>{
    const { id }  = req.params
     await Employees.findByIdAndUpdate(id, req.body)
      res.redirect(`/employees/${id}`)
  
   })
  
   //POST:
  router.post('/', async (req,res)=>{
      await Employees.create(req.body)
   res.redirect('/employees')
  })
      // Delete employee
      router.delete('/:id', async (req,res)=> {
          const { id } = req.params
          await Employees.findByIdAndDelete(id)   
      
          res.status(303).redirect('/employees')
      })
      


module.exports = router