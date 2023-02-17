const mongoose = require('mongoose')

let questSchema = new mongoose.Schema({
    name: { type: String, default: 'Quest'},
    description: { type: String, default: 'Help Wanted...' },
    pay: { type: Number, default: 0 },
    status: { type: String, default: 'open'}
})

module.exports = mongoose.model('Quest', questSchema)