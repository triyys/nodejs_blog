const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, default: 'Chưa có sản phẩm' },
    oldPrice: { type: Number, default: 0 },
    currentPrice: { type: Number, min: 0 },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', Product);