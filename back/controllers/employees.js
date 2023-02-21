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
    const post = new db.Employee({
        name: req.body.name,
        job_title: req.body.job_title,
        years_of_experience: req.body.years_of_experience,
        portrait: req.body.portrait,
        weekly_salary: req.body.weekly_salary
    })
    await db.Employee.create(post)
    await post.save()
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
   try {
    const post = await db.Employee.findOne({ _id: req.params.id })
    if (req.body.name) {
        post.name = req.body.name
    }
    if (req.body.job_title) {
        post.job_title = req.body.job_title
    }
    if (req.body.years_of_experience) {
        post.years_of_experience = req.body.years_of_experience
    }
    if (req.body.portrait) {
        post.portrait = req.body.portrait
    }
    if (req.body.weekly_salary) {
        post.weekly_salary = req.body.weekly_salary
    }
    await post.save()
    res.send(post)
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