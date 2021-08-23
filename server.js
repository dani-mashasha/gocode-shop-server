

const express = require("express");
const fs = require("fs");
const { readFile, writeFile } = require("./utils.js");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Home");
});


app.get("/products", (req, res) => {
   readFile((err, data) => {
        if(!err){
            const products = JSON.parse(data);
            res.send(products);
        }else {
            res.send("Cant find products")
        }
    });
});


app.get("/products/:id", (req, res) => {
    const {id} = req.params;
    readFile((err, data) => {
        if(!err){
            const products = JSON.parse(data);
            const product = products.find(product => product.id === +id);
            product?res.send(product):res.send("Cant find product");
                     
        }else{
            res.send("Cant Find Data");
        }      
    });
})


app.post("/products", (req, res) => {
    const {title} = req.body;
    readFile((err, data) => {
        if(!err){
            let products = JSON.parse(data);
            const newProduct = {
                title,
                id: products.length+1
            }
            products.push(newProduct);
            fs.writeFile("./products.js",JSON.stringify(products),(err) => {
                if(err){
                    res.send("EROR")
                }
            })
        }else{
            res.send("Cant Find Data")
        }
    })
});


app.put("/products/:id", (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    readFile((err,data) => {
        if(!err){
            const products = JSON.parse(data);
            const product = products.find(product => product.id === +id);
            if(product){
                product.title = title;
                writeFile(JSON.stringify(products), err => {
                    if(err){
                        res.send("Cant Updated");
                    }else{
                        res.send("Updated Succefuly")
                    }
                })
            }
        }else{
            res.send("Cant Find Data");   
        }
    })
});


app.delete("/products/:id", (req, res) => {
    const {id} = req.params;
    readFile((err,data) => {
        if(!err){
            let products = JSON.parse(data);
                products = products.filter(product => product.id !== +id);
            writeFile(JSON.stringify(products), err => {
                if(err){
                    res.send("ERR");
                }else{
                    res.send("Product Deleted")
                }
            })
        }
    })
});

app.listen("8080");