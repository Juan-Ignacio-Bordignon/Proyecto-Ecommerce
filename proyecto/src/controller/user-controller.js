const userService = require("../services/usersService.js");
const {validationResult} = require("express-validator");

const controller = {
    cart: (req, res) => {
        res.render("users/cart");
    },
    register: (req, res) => {
        res.render("users/register");
    },
    saveUser:async (req, res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            await userService.createUser(req.body);
            res.redirect("/");
        }else{
            res.render("users/register", {errors: errors.errors, old: req.body})
        }
    },
    login: (req, res) => {
        res.render("users/login");
    },
    proccesLogin: async (req,res)=>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let userToLogin = await userService.finduser(req.body);
            if(userToLogin==undefined){
                res.render("users/login", {errors:[{msg:"credenciales invalidas"}]})  
            }
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            if(req.body.remember){
                res.cookie("userEmail", req.body.email, {maxAge: (1000*60)*2})
            }
            res.redirect("/");
        }else{
            res.render("users/login", {errors: errors.errors})
        }
    },
    logout: (req,res)=>{
        req.session.destroy();
        res.clearCookie("userEmail");
        return res.redirect("/");
    }
};

module.exports = controller;