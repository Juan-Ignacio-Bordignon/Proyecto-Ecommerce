const { DataTypes } = require("Sequelize");

module.exports = (sequelize) =>{
    const model = sequelize.define(
        "User",
        {
            user_name: DataTypes.STRING,
            email: DataTypes.DECIMAL,
            password: DataTypes.DATE,
            category: DataTypes.STRING,
        },
        {
            tableName: "users",
            timestamps: false,
        }
    );
    return model;
};