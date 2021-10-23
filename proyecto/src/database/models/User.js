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
            admin: { type: dataTypes.INTEGER },
        },
        {
            tableName: "users",
            timestamps: false
        }
    );
    return User;
};
