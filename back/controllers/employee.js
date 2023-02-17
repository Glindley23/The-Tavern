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



module.exports=router