const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  orderid:String,
  useremail: String,
  products: [{ id: String, quantity: Number }],
  totalBill: Number,
  date: { type: Date, default: Date.now },
  paymentMethod: String,
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
