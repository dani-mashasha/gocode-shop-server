const fs = require("fs");


const express = require("express");


const app = express();


app.get("/", (req, res) => {
    res.send("Home");
});


app.get("/products", (req, res) => {
    fs.readFile("./products.js", "utf8", (err, data) => {
        if(!err){
            const products = JSON.parse(data);
            res.send(products);
        }else res.send("Cant find products")
    });
});


app.get("/products/:id", (req, res) => {
    const {id} = req.params;
    fs.readFile("./products.js", "utf8", (err, data) => {
        if(!err){
            const products = JSON.parse(data);
            const product = products.find(product => product.id === +id);
            product?res.send(product):res.send("Cant find product");
                     
        }else res.send("Cant find product");
        
    });

})


app.listen("8080");