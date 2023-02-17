const router = require('express').Router()
const { Employees } = require('../../front/src/Components/Employees')
const employee = require('../models/employee')
const db= require('../modules')
 
router.get('/', async (req, res) => {
    const employee = await Employee.find()
    res.json(employee)
})

router.post('/', async (req, res) => {
    const employee = await new Employee(req.body).save()
    res.json(employee)
})

//get by id
router.get('/employee/:id', async (req, res) => {
    const employee = await Employee.findById(id)
    const {id} = req.params
    res.json(employee)
  })

   //PUT:
   router.put('/:id', async(req,res)=>{
    const { id }  = req.params
     await Employee.findByIdAndUpdate(id, req.body)
      res.redirect(`/employee/${id}`)
  
   })
  
   //POST:
  router.post('/', async (req,res)=>{
      await Employee.create(req.body)
   res.redirect('/employee')
  })
      // Delete employee
      router.delete('/:id', async (req,res)=> {
          const { id } = req.params
          await Employee.findByIdAndDelete(id)   
      
          res.status(303).redirect('/employee')
      })
      


module.exports=router