const productService = require("../services/productServices");
const db = require("../database/models");
const { validationResult } = require("express-validator");

const controller = {
    creat: async (req, res) => {
        const types = await db.Type.findAll();
        res.render("products/productCreat", { types });
    },
    save: async (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const newProduct = await productService.createOne(
                req.body,
                req.file
            );
            res.redirect("/");
        } else {
            const types = await db.Type.findAll();
            res.render("products/productCreat", {
                errors: errors.errors,
                old: req.body,
                types: types,
            });
        }
    },
    edit: async (req, res) => {
        const types = await db.Type.findAll();
        const producto = await productService.findOneById(req.params.id);
        res.render("products/productEdit", { producto: producto, types });
    },
    update: async (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const updatedproduct = await productService.editOne(
                req.params.id,
                req.body,
                req.file
            );
            res.redirect("/");
        } else {
            const types = await db.Type.findAll();
            const producto = await productService.findOneById(req.params.id);
            res.render("products/productEdit", { producto: producto, errors: errors.errors,types: types });
        }
    },
    detail: async (req, res) => {
        const producto = await productService.findOneById(req.params.id);
        res.render("products/productDetail", { producto: producto });
    },
    destroy: async (req, res) => {
        const detroyedProduct = await productService.destroyOne(req.params.id);
        res.redirect("/");
    },
    seacrh: async (req, res) => {
        const producto = await productService.findLike(req.query.search);
        res.render("index", { productos: producto });
    },
};

module.exports = controller;
