const userService = require("../services/usersService.js")
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
            userService.createUser(req.body);
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