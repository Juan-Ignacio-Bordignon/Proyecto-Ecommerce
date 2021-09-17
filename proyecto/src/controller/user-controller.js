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
    proccesLogin: (req,res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let userToLogin = userService.finduser(req.body);
            console.log(userToLogin);
            if(userToLogin == undefined){
                res.render("users/login", {errors:[{msg:"credenciales invalidas"}]})  
            }
            req.session.userToLogin = userToLogin;
            res.redirect("/");
        }else{
            res.render("users/login", {errors: errors.errors})
        }
    },
};

module.exports = controller;