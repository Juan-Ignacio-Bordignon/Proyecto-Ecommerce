const { DataTypes } = require("Sequelize");

module.exports = (sequelize) =>{
    const model = sequelize.define(
        "Type",
        {
            name: DataTypes.STRING,
        },
        {
            tableName: "types",
            timestamps: false,
        }
    );
    return model;
};