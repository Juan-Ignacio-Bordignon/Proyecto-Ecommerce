const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const pathToUsers = path.join(__dirname,"../data/usersDataBase.json");
const listaUsers = JSON.parse(fs.readFileSync(pathToUsers), "utf-8");

const usersService = {
    createUser(payload) {
        const lastUser = listaUsers[listaUsers.length - 1];
        const biggestuserId = listaUsers.length > 0 ? lastUser.id : 1;
        const user = {
            id: biggestuserId +1,
            userName: payload.userName,
            email: payload.email,
            password: bcrypt.hashSync(payload.password,10),
            category: "client"
        };
        listaUsers.push(user);
        this.save();
    },
    save() {
        const jsonString = JSON.stringify(listaUsers, null, 4);
        fs.writeFileSync(pathToUsers, jsonString);
    },
}

module.exports = usersService;