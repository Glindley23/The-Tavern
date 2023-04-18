const mongoose = require('mongoose')

let foodSchema = new mongoose.Schema({
    name: { type: String, default: 'drink'},
    amount_in_stock: { type: Number, default: 0 },
    cost_to_buy: { type: Number, default: 0 },
    sell_price: { type: Number, default: 0}
})

module.exports = mongoose.model('Food', foodSchema)