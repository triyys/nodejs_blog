const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, required: true, },
    oldPrice: { type: Number, default: 0 },
    currentPrice: { type: Number, min: 0 },
    imageUrl: { type: String, default: 'https://live.staticflickr.com/65535/51666969048_b567bea2aa_c.jpg'},
    slug: { type: String, slug: 'name', unique: true },
}, {
    // supported by mongoose from version 4.
    timestamps: true,
});

// Add plugins
mongoose.plugin(slug);
Product.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Product', Product);