const bcrypt = require("bcryptjs");
const db = require("../database/models");

const usersService = {
    createUser(payload) {
        db.User.create({
            ...payload,
            password: bcrypt.hashSync(payload.password, 10),
        });
    },
    async finduser(user) {
        let userToLogin = undefined;
        let userToFind = await db.User.findOne({
            where: { email: user.email },
        });
        if (userToFind != null) {
            if (bcrypt.compareSync(user.password, userToFind.password)) {
                userToLogin = userToFind;
            }
            return userToLogin;
        } else {
            return null;
        }
    },
    findUserByEmail(email) {
        const userToLogin = db.User.findOne({ where: { email: email } });
        return userToLogin;
    },
    findUserById(id) {
        const userToLogin = db.User.findOne({ where: { id: id } });
        return userToLogin;
    },
};

module.exports = usersService;
