const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: Object,
  products: Array,
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
