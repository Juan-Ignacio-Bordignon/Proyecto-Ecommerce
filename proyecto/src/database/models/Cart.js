module.exports = (sequelize, dataTypes) => {
    const Cart = sequelize.define(
        "Cart",
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: { type: dataTypes.INTEGER },
            product_id: { type: dataTypes.INTEGER },
            quantity: { type: dataTypes.INTEGER},
            sub_total: {type: dataTypes.DECIMAL},
            order_id: {type: dataTypes.INTEGER}
        },
        {
            tableName: "carts",
            timestamps: false,
        }
    );
    //Asociaciones
    Cart.associate = (models) => {
        Cart.belongsTo(models.User, { as: "userId", foreignKey: "user_id" });
        Cart.belongsTo(models.Product, {
            as: "product",
            foreignKey: "product_id",
        });
    };
    return Cart;
};
