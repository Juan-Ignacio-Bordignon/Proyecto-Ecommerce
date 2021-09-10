const fs = require("fs");
const path = require("path");

const pathToUsers = path.join(__dirname,"../data/userDataBase.json");
const listaUsers = JSON.parse(fs.readFileSync(pathToUsers), "utf-8");


const controller = {
    cart: (req, res) => {
        res.render("users/cart");
    },
    register: (req, res) => {
        res.render("users/register");
    },
    saveUser:()=>{
        //guarda el usuario en el JSON/base de datos
    },
    login: (req, res) => {
        res.render("users/login");
    },
};

module.exports = controller;