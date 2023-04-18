const mongoose = require('mongoose')

let employeeSchema = new mongoose.Schema({
    name: { type: String, default: "Onion Knight"},
    job_title: { type: String, default: "guard"},
    years_of_experience: { type: Number, default: 5},
    portrait:{ type: String, default:"https://pbs.twimg.com/media/FH5DTVjWYAEEuyH.jpg:large"},
    weekly_salary: { type: Number, default: 100}
})

module.exports = mongoose.model('Employee', employeeSchema)