const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());


const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String
});

const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/products", (req, res) => {
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

app.get("/products/:id", (req, res) => {
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

app.post("/products", (req, res) => {
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

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, description, category, image } = req.body;

  const updatedProduct = {};
  title ? (updatedProduct.title = title) : null;
  price ? (updatedProduct.price = price) : null;
  description ? (updatedProduct.description = description) : null;
  category ? (updatedProduct.category = category) : null;
  image ? (updatedProduct.image = image) : null;

  Product.findByIdAndUpdate(id, updatedProduct, {new : true}).then(
    (product) => {
      res.send(product);
    },
    (err) => {
      res.send("Product Not Found");
    }
  );
});

app.delete("/products/:id", (req, res) => {
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

function initProducts() {
  Product.findOne()
    .then((product) => {
      if (!product) {
        fs.readFile("./initialProducts.json", "utf8", (err, data) => {
          let initialProducts = JSON.parse(data);
          Product.insertMany(initialProducts).then((products) => {
            console.log(products);
          });
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

mongoose
  .connect(
      "mongodb+srv://dani:dm8036226@cluster0.z9oum.mongodb.net/gocode_shop?retryWrites=true&w=majority", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      app.listen("8080");
    },
    (err) => {
      console.log(err);
    }
  );
