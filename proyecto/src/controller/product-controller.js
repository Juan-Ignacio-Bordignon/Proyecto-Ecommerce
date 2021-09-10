const fs = require("fs");
const path = require("path");

const pathToProducts = path.join(__dirname,"../data/productDataBase.json");
const listaProductos = JSON.parse(fs.readFileSync(pathToProducts), "utf-8");

const controller = {
    creat: (req, res) => {
        res.render("products/productCreat");
    },
    save: (req,res)=>{
        let lastProduct = listaProductos[listaProductos.length - 1];
        let biggestProductId = listaProductos.length > 0 ? lastProduct.id : 1;
        let product = {
          id: biggestProductId + 1,
          ...req.body,
          price: Number(req.body.price),
          img: req.file ? req.file.filename : "",
        };
        listaProductos.push(product);
        fs.writeFileSync(pathToProducts, JSON.stringify(listaProductos));
        res.redirect("/");
    },
    edit: (req, res) => {
        const producto = listaProductos.find((producto) => {
            return producto.id == req.params.id;
        });
        res.render("products/productEdit", { producto: producto });
    },
    update: (req, res) => {
        let product = listaProductos.find((prod) => {
          return prod.id == req.params.id;
        });
        product.title = req.body.title;
        product.price = Number(req.body.price);
        product.tipe = req.body.tipe;
        product.descr = req.body.desc;
        product.image = req.file ? req.file.filename : product.image;
    
        const jsonString = JSON.stringify(listaProductos, null, 4);
        fs.writeFileSync(pathToProducts, jsonString);
        res.redirect("/");
      },
    detail: (req, res) => {
        const producto = listaProductos.find((producto) => {
            return producto.id == req.params.id;
        });
        res.render("products/productDetail", { producto: producto });
    },
};

module.exports = controller;
