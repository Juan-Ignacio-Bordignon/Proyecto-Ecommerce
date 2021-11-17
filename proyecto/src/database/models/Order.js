module.exports = (sequelize,dataTypes)=>{
    const Record = sequelize.define("Record",{
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: { type: dataTypes.INTEGER },
    },
    {
        tableName: "order",
        timestamps: true
    });
    Record.associate = (models) => {
        Record.belongsTo(models.User, { as: "userId", foreignKey: "user_id" });
    };
    return Record;
}