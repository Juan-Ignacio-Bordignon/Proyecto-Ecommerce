const { DataTypes } = require("Sequelize");

module.exports = (sequelize) =>{
    const model = sequelize.define(
        "Cart",
        {
            cuantity: DataTypes.SMALLINT,
            total_price: DataTypes.DECIMAL,
        },
        {
            tableName: "carts",
            timestamps: false,
        }
    );
    //Asociaciones
    model.associate = (models) => {
        model.belongsTo(models.User, { as: "userId", foreignKey: "user_id" });
        model.belongsTo(models.Product, { as: "productId", foreignKey: "product_id" });
    };
    return model;
};