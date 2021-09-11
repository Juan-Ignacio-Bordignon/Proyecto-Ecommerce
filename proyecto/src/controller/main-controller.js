const productService = require("../services/productServices")

const controller = {
    index: (req, res) => {
        const products = productService.findAll();
        res.render("index", { productos: products });
    }
};

module.exports = controller;
