module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define(
        "User",
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_name: { type: dataTypes.STRING },
            email: { type: dataTypes.STRING },
            password: { type: dataTypes.STRING },
            category: { type: dataTypes.STRING },
        },
        {
            tableName: "users",
            timestamps: false
        }
    );
    User.associate = (models) => {
        User.hasMany(models.Cart, { as: "cartId", foreignKey: "user_id" });
        User.hasMany(models.Record, {as:"recordId", foreignKey: "user_id"});
    };
    return User;
};
