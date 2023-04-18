const mongoose = require('mongoose')

let roomSchema = new mongoose.Schema({
    room: { type: Number },
    available: { type: String, default: 'yes' },
    occupancy: { type: Number},
    cost_per_night: { type: Number, default: 0}
})

module.exports = mongoose.model('Room', roomSchema)