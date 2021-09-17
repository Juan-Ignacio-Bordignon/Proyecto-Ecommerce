const fs = require("fs");
const path = require("path");

const pathToUsers = path.join(__dirname,"../data/usersDataBase.json");
const listaUsers = JSON.parse(fs.readFileSync(pathToUsers), "utf-8");
const {validationResult} = require("express-validator");

const controller = {
    cart: (req, res) => {
        res.render("users/cart");
    },
    register: (req, res) => {
        res.render("users/register");
    },
    saveUser:(req, res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            res.redirect("/");
        }else{
            res.render("users/register", {errors: errors.errors, old: req.body})
        }
    },
    login: (req, res) => {
        res.render("users/login");
    },
};

module.exports = controller;