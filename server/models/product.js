const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  price:    { type: Number, required: true },
  image:    { type: String },
  brand:    { type: String },
  category: { type: String },
  rating:   { type: Number, default: 5 },
  stock:    { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);