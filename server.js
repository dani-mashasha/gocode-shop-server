const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const { query } = require("express");

const mongoose = require('mongoose');
const { json } = require("body-parser");

const app = express();

app.use(express.json());

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,

});

const Product = mongoose.model('Product', productSchema);


app.get("/", (req, res) => {
    res.send("Home");
});


app.get("/products",async (req, res) => {
    const {category, min, max} = req.query;
    await Product.find((err, products) => {
        if(category){
            category === "all items"?  products = products: products =products.filter(product=>product.category === category);
        }
        if(min){
            products = products.filter(product => product.price >= +min);
        }
        if(max){
            products = products.filter(product => product.price <= +max);
        }
        res.send(products);
    })
});


app.get("/products/:id", async(req, res) => {
    const {id} = req.params;
    await Product.findById(id, (err, product) => {
        if(err){
            console.log(err)
        }
        console.log(product);
        res.send(product);
    })

});


app.post("/products", async(req, res) => {
    const {title, price, description, category, image} = req.body;
    const product = new Product({
        title,
        price,
        description,
        category,
        image
    });
    try{
        await product.save();
        res.status(201).send(product);
    } catch(error){
        res.status(500).send(error);
    }
});


app.put("/products/:id", async(req, res) => {
    const {id} = req.params;
    const {title, price, description, category, image} = req.body;

    const updatedProduct = {};
    title? updatedProduct.title = title : null;
    price? updatedProduct.price = price : null;
    description? updatedProduct.description = description : null;
    category? updatedProduct.category = category : null;
    image? updatedProduct.image = image : null;

    await Product.findByIdAndUpdate(id, updatedProduct, (err, product) => {
        res.send(product)
    })
});


app.delete("/products/:id",async (req, res) => {
    try{
        const {id} = req.params;
        await Product.findByIdAndDelete(id, (err, product) => {
        res.send(product)})
    } catch(err) {
        res.send("Product Not Found")
    }
    
});


function initProducts(){
    Product.findOne((err, product) => {
        if(!product){
            fs.readFile("./initialProducts.json", "utf8", (err, data) => {
                let initialProducts = JSON.parse(data);
                Product.insertMany(initialProducts, (err, products) => {
                    console.log(products)
                })
            })
        }
    })
};

initProducts();


mongoose.connect(
    'mongodb://localhost/gocode_shop', 
    {  useNewUrlParser: true,
       useCreateIndex: true,
       useUnifiedTopology: true},
       () => {
           console.log("Connected To DB")
           app.listen("8080");  
       }
  );
  

