const mongoose = require('mongoose')

let roomSchema = new mongoose.Schema({
    room: { type: Int32Array },
    available: { type: String, default: 'yes' },
    occupancy: { type: Int32Array},
    cost_per_night: { type: Int32Array, default: 0}
})

module.exports = mongoose.model('Room', roomSchema)