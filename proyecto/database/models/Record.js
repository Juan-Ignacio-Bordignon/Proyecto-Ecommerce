const { DataTypes } = require("Sequelize");

module.exports = (sequelize) =>{
    const model = sequelize.define(
        "Record",
        {
            cuantity: DataTypes.SMALLINT,
            created_at: DataTypes.DATE,
        },
        {
            tableName: "records",
        }
    );
    //Asociaciones
    model.associate = (models) => {
        model.belongsTo(models.User, { as: "userId", foreignKey: "user_id" });
        model.belongsTo(models.Product, { as: "productId", foreignKey: "product_id" });
    };
    return model;
};