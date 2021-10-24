module.exports = (sequelize,dataTypes)=>{
    const Record = sequelize.define("Record",{
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: { type: dataTypes.INTEGER },
        product_id: { type: dataTypes.INTEGER },
        cuantity: { type: dataTypes.INTEGER },
        createdAt: { type: dataTypes.DATE},
        updatedAt: {type: dataTypes.DATE}
    },
    {
        tableName: "records",
        timestamps: true
    });
    Record.associate = (models) => {
        Record.belongsTo(models.User, { as: "userId", foreignKey: "user_id" });
        Record.belongsTo(models.Product, { as: "productId", foreignKey: "product_id" });
    };
    return Record;
}