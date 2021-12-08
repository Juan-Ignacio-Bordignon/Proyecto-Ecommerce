const productService = require("../../services/productServices");
const db = require("../../database/models");
const { validationResult } = require("express-validator");

const controller = {
    allProducts: async (req, res) => {
        const products = await productService.findAll();
        const categories = await db.Type.findAll();

        const count = products.length;
        let countByCategory = [];
        categories.map((category, index) => {
            let count = 0;
            for (const product of products) {
                if (product.type_id === category.id) {
                    count += 1;
                }
            }
            countByCategory[index] = { id: category.name, count: count };
        });
        res.json({
            count: count,
            countByCategory: countByCategory,
            products: products,
        });
    },
    productById: async (req, res) => {
        const product = await productService.findOneById(req.params.id);
        console.log(product);
        const response = {
            ...product.dataValues,
            URLImage: `http:localhost:3000${product.img}`,
        };
        res.json(response);
    },
};

module.exports = controller;
