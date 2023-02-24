const router = require('express').Router()
const db= require('../models')

//SHOW ALL EMPLOYEES
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

//CREATE NEW EMPLOYEE
router.post('/', async (req, res) => {
    try {
        const newEmployeeData  = req.body;
        const newEmployee = await db.Employee.create(newEmployeeData)
        res.status(201).json(newEmployee)
    }
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
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

//PUT: Update Employee
router.put('/:id', async(req,res)=>{
  
  //const employee = req.body
    try {
    const {name, job_title, years_of_experience, portrait, weekly_salary } = req.body;
    const updatedEmployee = await db.employees.update(
        { name, job_title, years_of_experience, portrait, weekly_salary },
        {
            where: { id: req.params.id },
            returning: true, // include the updated item in the response
            plain: true, // return only the updated item, not a wrapper object
          }
    );
    if (updatedEmployee[0] === 0) {
        res.status(404)
    } else 
    res.json(updatedEmployee[1])
    }   
        catch {
    res.status(404)
    res.send({ error: "Post doesn't exist!" })
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