const { DataTypes } = require("Sequelize");

module.exports = (sequelize) =>{
    const model = sequelize.define(
        "Product",
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.DECIMAL,
            image: DataTypes.STRING,
            deleted: DataTypes.BOOLEAN,
        },
        {
            tableName: "ProductS",
            timestamps: false,
        }
    );
    //Asociaciones
    model.associate = (models) => {
        model.belongsTo(models.Type, { as: "type", foreignKey: "type" });
    };
    return model;
};