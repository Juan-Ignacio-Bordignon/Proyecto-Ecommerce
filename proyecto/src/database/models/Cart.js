module.exports = (sequelize, dataTypes) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: { type: dataTypes.INTEGER },
        product_id: { type: dataTypes.INTEGER },
        cuantity: { type: dataTypes.INTEGER },
        total_price: { type: dataTypes.INTEGER },
    },
    {
        tableName: "carts",
        timestamps: false
    });
    return Cart;
};
