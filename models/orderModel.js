const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: Object,
  products: Array,
  totalPrice: Number,
  date: Object,
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
