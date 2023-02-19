const mongoose = require('mongoose')

let equipmentSchema = new mongoose.Schema({
    name: { type: String},
    type: { type: String},
    cost_to_buy: { type: Number},
    sell_price: { type: Number},
    amount_in_stock: { type: Number }
})

module.exports = mongoose.model('Equipment', equipmentSchema)