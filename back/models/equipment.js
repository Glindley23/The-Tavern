const mongoose = require('mongoose')

let equipmentSchema = new mongoose.Schema({
    name: { type: String, default: 'drink'},
    type: { type: String, default: 'category' },
    cost_to_buy: { type: Int32Array, default: 0 },
    sell_price: { type: Int32Array, default: 0},
    amount_in_stock: { type: Int32Array, default: 0 }
})

module.exports = mongoose.model('Equipment', equipmentSchema)