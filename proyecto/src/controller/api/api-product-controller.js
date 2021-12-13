const productService = require("../../services/productServices");
const db = require("../../database/models");
const { validationResult } = require("express-validator");

const controller = {
    allProducts: async (req, res) => {
        const products = await productService.findAllAndDeleted();
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
        const response = {
            ...product,
        };
        res.json(product);
    },
    type: async (req,res) =>{
        const types = await db.Type.findAll();
        res.json({
            types: types
        })
    },
    update: async (req, res) => {
        let errors = validationResult(req);
        console.log(req.body)
        if (errors.isEmpty()) {
            const updatedproduct = await productService.editOneApi(
                req.params.id,
                req.body,
                req.file
            );
            res.redirect("/");
        } else {
            res.json({
                errors: errors.errors,
            });
        }
    }
};

module.exports = controller;
