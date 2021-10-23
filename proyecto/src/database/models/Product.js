module.exports = (sequelize,dataTypes)=>{
    const Product = sequelize.define("Product",{
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {type: dataTypes.STRING},
        type: {type: dataTypes.INTEGER},
        description: {type: dataTypes.STRING},
        price: {type: dataTypes.INTEGER},
        image: {type: dataTypes.STRING},
        deleted: {type: dataTypes.INTEGER}
    },
    {
        tableName: "products",
        timestamps: false
    }
    );
    return Product;
}