const router = require('express').Router()
const employee = require('../models/employee')
const employee = require('../models/employee')
 

router.get('/', async (req,res)=>{
    const employee = await employee.find().populate('employee')
    res.json(employee)
})
module.exports=router