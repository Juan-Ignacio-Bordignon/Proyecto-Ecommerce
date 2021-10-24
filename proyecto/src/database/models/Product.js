module.exports = (sequelize,dataTypes)=>{
    const Product = sequelize.define("Product",{
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {type: dataTypes.STRING},
        type_id: {type: dataTypes.INTEGER},
        description: {type: dataTypes.STRING},
        price: {type: dataTypes.INTEGER},
        img: {type: dataTypes.STRING},
        deleted: {type: dataTypes.INTEGER}
    },
    {
        tableName: "products",
        timestamps: false
    });

    Product.associate = (models) => {
        Product.belongsTo(models.Type, { as: "type", foreignKey: "type_id" });
        Product.hasMany(models.Cart, { as: "CartId", foreignKey: "product_id" });
        Product.hasMany(models.Record, {as:"recordId", foreignKey: "product_id"});

    };
    return Product;
}