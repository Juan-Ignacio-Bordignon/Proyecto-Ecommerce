const db = require("../database/models");

const produsctService = {
    findAll(){
        const product = db.Product.findAll({
            where:{deleted: 0},
            include: [{association: "type"}]
        }   
        );
        return product;
    },
    findOneById(id) {
        const producto = db.Product.findByPk(id,{include: [{association: "type"}]});
        return producto;
    },
    createOne(payload, image) {
        const product = db.Product.create({
            ...payload,
            img: image ? "/images/"+image.filename : "",
        });
    },
    editOne(id, payload, image) {
        db.Product.update({
            title: payload.title,
            price: Number(payload.price),
            type_id: payload.type_id,
            desc: payload.desc,
            image: image ? image.filename : "",
        },
        {
            where:{id:id}
        });
    },
    destroyOne(id){
        db.Product.update({
            deleted:1,
        },
        {
            where:{id:id}
        })
    },
};

module.exports = produsctService;
