
const fs = require("fs");
const filePath = "./products.js";

function readFile(colback){
    fs.readFile(filePath, "utf8", colback);
};

function writeFile(data, colback){
    fs.writeFile(filePath, data, colback);
};

module.exports = {
    readFile,
    writeFile
}