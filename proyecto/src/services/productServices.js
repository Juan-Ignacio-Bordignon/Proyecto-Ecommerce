const fs = require("fs");
const path = require("path");

const pathToProducts = path.join(__dirname, "../data/productDataBase.json");
const listaProductos = JSON.parse(fs.readFileSync(pathToProducts), "utf-8");

const produsctService = {
    findAll(){
        const product = listaProductos.filter((prod)=>{
            return !prod.deleted;
        });
        return product;
    },
    findOneById(id) {
        const producto = listaProductos.find((producto) => {
            return producto.id == id;
        });
        return producto;
    },
    createOne(payload, image) {
        const lastProduct = listaProductos[listaProductos.length - 1];
        const biggestProductId = listaProductos.length > 0 ? lastProduct.id : 1;
        const product = {
            id: biggestProductId + 1,
            ...payload,
            price: Number(payload.price),
            img: image ? "/images/"+image.filename : "",
        };
        listaProductos.push(product);
        this.save();
    },
    editOne(id, payload, image) {
        const product = this.findOneById(id);
        product.title = payload.title;
        product.price = Number(payload.price);
        product.tipe = payload.tipe;
        product.desc = payload.desc;
        product.image = image ? image.filename : product.image;
        this.save();
    },
    save() {
        const jsonString = JSON.stringify(listaProductos, null, 4);
        fs.writeFileSync(pathToProducts, jsonString);
    },
    destroyOne(id){
        const product = this.findOneById(id);
        product.deleted = true;
        this.save();
    },
};

module.exports = produsctService;
