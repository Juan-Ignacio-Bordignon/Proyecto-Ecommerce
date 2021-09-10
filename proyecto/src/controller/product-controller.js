const fs = require("fs");
const path = require("path");

const pathToProducts = path.join(__dirname,"../data/productDataBase.json");
const listaProductos = JSON.parse(fs.readFileSync(pathToProducts), "utf-8");

const controller = {
    creat: (req, res) => {
        res.render("products/productCreat");
    },
    edit: (req, res) => {
        const producto = listaProductos.find((producto) => {
            return producto.id == req.params.id;
        });
        res.render("products/productEdit", { producto: producto });
    },
    detail: (req, res) => {
        const producto = listaProductos.find((producto) => {
            return producto.id == req.params.id;
        });
        res.render("products/productDetail", { producto: producto });
    },
};

module.exports = controller;
