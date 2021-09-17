const productService = require("../services/productServices")

const controller = {
    creat: (req, res) => {
        res.render("products/productCreat");
    },
    save: (req,res)=>{
        productService.createOne(req.body, req.file);
        res.redirect("/");
    },
    edit: (req, res) => {
        const producto = productService.findOneById(req.params.id)
        res.render("products/productEdit", { producto: producto });
    },
    update: (req, res) => {
        productService.editOne(req.params.id, req.body, req.file);
        res.redirect("/");
      },
    detail: (req, res) => {
        const producto = productService.findOneById(req.params.id);
        res.render("products/productDetail", { producto: producto });
    },
    destroy: (req,res)=>{
        productService.destroyOne(req.params.id);
        res.redirect("/");
    }
};

module.exports = controller;
