const mongoose = require('mongoose')

let foodSchema = new mongoose.Schema({
    name: { type: String, default: 'drink'},
    amount_in_stock: { type: Int32Array, default: 0 },
    cost_to_buy: { type: Int32Array, default: 0 },
    sell_price: { type: Int32Array, default: 0}
})

module.exports = mongoose.model('Food', foodSchema)