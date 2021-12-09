const db = require("../../database/models");
const sequelize = db.sequelize;

const usersService = require("../../services/usersService.js");

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
const controller = {
    allUsers: async (req, res) => {
        let users = await db.User.findAll();
        let count = 0;

        users.map((user) => {
            delete user.dataValues.password;
            count += 1;
        });
        listOfUsers = {
            count: count,
            users: users,
        };

        res.json(listOfUsers);
    },
    userById: async (req, res) => {
        let user = await db.User.findOne({ where: { id: req.params.id } });

        if (user != null) {
            delete user.dataValues.password;
            delete user.dataValues.admin;
            res.json(user);
        } else {
            res.json({});
        }
    },
};

module.exports = controller;
