// product.model.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productid: { type: Number, required: true },
  title: { type: String, required: true },
  gender: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
