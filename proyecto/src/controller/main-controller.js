const fs = require("fs");
const path = require("path");

const pathToProducts = path.join(__dirname,"../data/productDataBase.json");
const listaProductos = JSON.parse(fs.readFileSync(pathToProducts), "utf-8");

const controller = {
    index: (req, res) => {
        res.render("index", { productos: listaProductos });
    }
};

module.exports = controller;
