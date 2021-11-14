const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: Object,
  products: Array,
  totalPrice: Number,
  time: String,
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
