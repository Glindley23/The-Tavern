const mongoose = require('mongoose')

let equipmentSchema = new mongoose.Schema({
    name: { type: String, default: "name"},
    type: { type: String, default: "type"},
    cost_to_buy: { type: Number, default: 10},
    sell_price: { type: Number, default: 12},
    amount_in_stock: { type: Number, default: 10 }
})

module.exports = mongoose.model('Equipment', equipmentSchema)