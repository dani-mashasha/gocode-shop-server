const router = require("express").Router();
const Order = require("../models/orderModel.js");
const auth = require("../middleware/auth.js");

router.post("/", auth, async (req, res) => {
  try {
    const { user, products, totalPrice } = req.body;
    const newOrder = new Order({
      user,
      products,
      totalPrice,
      time: new Date(),
    });

    const savedOrder = await newOrder.save();

    res.send(savedOrder);
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized Order" });
  }
});

router.post("/allorders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.send(orders);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
