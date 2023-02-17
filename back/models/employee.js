const mongoose = require('mongoose')

let employeeSchema = new mongoose.Schema({
    name: { type: String, default: 'Employee Name'},
    job_title: { type: String, default: 'job' },
    years_of_experience: { type: Number, default: 0 },
    portrait:{ type: String, default: 'https://i.pinimg.com/736x/e3/bc/bc/e3bcbcabebb3add1b431a444a749a4fb.jpg'},
    weekly_salary: { type: Number, default: 0}
})

module.exports = mongoose.model('Employee', employeeSchema)