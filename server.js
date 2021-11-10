const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

app.use(express.static("client/build"));
app.use(express.json());
app.use(cors({ origin: ["/api"], credentials: true }));
app.use(cookieParser());

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/api/products", (req, res) => {
  const { category, min, max } = req.query;
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

app.get("/api/products/:id", (req, res) => {
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

app.post("/api/products", (req, res) => {
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

app.put("/api/products/:id", (req, res) => {
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

app.delete("/api/products/:id", (req, res) => {
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

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

function initProducts() {
  Product.findOne()
    .then((product) => {
      if (!product) {
        fs.readFile("./initialProducts.json", "utf8", (err, data) => {
          let initialProducts = JSON.parse(data);
          Product.insertMany(initialProducts).then((products) => {});
        });
      } else {
        console.log("BD Is Full");
      }
    })
    .catch((err) => {
      console.log("ERR:", err);
    });
}

initProducts();

app.use("/api/auth", require("./routers/userRouter.js"));
app.use("/api/order", require("./routers/orderRouter.js"));
// app.use("/api/products", require("./routers/productRouter.js"));

const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;

const port = process.env.PORT || 8080;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(
    () => {
      app.listen(port);
      console.log(`Listening on ${port}`);
    },
    (err) => {
      console.log(err);
    }
  );
