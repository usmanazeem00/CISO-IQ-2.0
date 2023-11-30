const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  useremail: String,
  products: [{ productId: String, quantity: Number }],
  totalBill: Number,
  date: { type: Date, default: Date.now },
  paymentMethod: String,
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
