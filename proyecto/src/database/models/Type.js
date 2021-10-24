module.exports = (sequelize, dataTypes) => {
    const Type = sequelize.define("Type", {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {type: dataTypes.STRING}
    },
    {
        tableName: "types",
        timestamps: false
    });
    Type.associate = (models) => {
        Type.hasMany(models.Product, { as: "product", foreignKey: "type_id" });
    };
    return Type;
};
