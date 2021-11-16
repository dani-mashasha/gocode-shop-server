const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: Object,
  products: Array,
  totalPrice: Number,
  delivery: String,
  date: Object,
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
