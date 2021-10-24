const productService = require("../services/productServices")

const controller = {
    index: async (req, res) => {
        const products = await productService.findAll();
        res.render("index", { productos: products});
    }
};

module.exports = controller;
