const mongoose = require('mongoose')

let employeeSchema = new mongoose.Schema({
    name: { type: String},
    job_title: { type: String},
    years_of_experience: { type: Number},
    portrait:{ type: String},
    weekly_salary: { type: Number}
})

module.exports = mongoose.model('Employee', employeeSchema)