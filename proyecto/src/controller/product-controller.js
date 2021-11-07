const productService = require("../services/productServices")
const db = require("../database/models")

const controller = {
    creat: async (req, res) => {
        const types = await db.Type.findAll();
        res.render("products/productCreat",{types});
    },
    save: async (req,res)=>{
        const newProduct = await productService.createOne(req.body, req.file);
        res.redirect("/");
    },
    edit: async (req, res) => {
        const types = await db.Type.findAll();
        const producto = await productService.findOneById(req.params.id)
        res.render("products/productEdit", { producto: producto, types});
    },
    update: async (req, res) => {
        const updatedproduct = await productService.editOne(req.params.id, req.body, req.file);
        res.redirect("/");
      },
    detail: async (req, res) => {
        const producto = await productService.findOneById(req.params.id);
        res.render("products/productDetail", { producto: producto });
    },
    destroy: async (req,res)=>{
        const detroyedProduct = await productService.destroyOne(req.params.id);
        res.redirect("/");
    },
    seacrh: async (req,res)=>{
        const producto = await productService.findLike(req.query.search);
        res.render("index", {productos: producto});
    }
};

module.exports = controller;
