const router = require("express").Router();
const Product = require("../models/productModel.js");

router.get("/", (req, res) => {
  const { category, min, max } = req.query;
  console.log(req.query);
  Product.find().then((products) => {
    if (category) {
      category === "all items"
        ? (products = products)
        : (products = products.filter(
            (product) => product.category === category
          ));
    }
    if (min) {
      products = products.filter((product) => product.price >= +min);
    }
    if (max) {
      products = products.filter((product) => product.price <= +max);
    }
    res.send(products);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id).then(
    (product) => {
      res.send(product);
    },
    (err) => {
      res.send("Cant Find Product");
    }
  );
});

router.post("/", (req, res) => {
  const { title, price, description, category, image } = req.body;
  if (title && price && description && category && image) {
    const product = new Product({
      title,
      price,
      description,
      category,
      image,
    });
    product.save().then(() => res.send(product));
  } else {
    res.send("Please fill in al the parameters");
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, description, category, image } = req.body;

  const updatedProduct = {};
  title ? (updatedProduct.title = title) : null;
  price ? (updatedProduct.price = price) : null;
  description ? (updatedProduct.description = description) : null;
  category ? (updatedProduct.category = category) : null;
  image ? (updatedProduct.image = image) : null;

  Product.findByIdAndUpdate(id, updatedProduct, { new: true }).then(
    (product) => {
      res.send(product);
    },
    (err) => {
      res.send("Product Not Found");
    }
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id).then(
    (product) => {
      res.send(product);
    },
    (err) => {
      res.send("Product Not Found");
    }
  );
});

module.exports = router;
