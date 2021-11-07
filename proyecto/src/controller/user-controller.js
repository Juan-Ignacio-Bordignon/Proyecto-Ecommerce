const userService = require("../services/usersService.js");
const { validationResult } = require("express-validator");
const db = require("../database/models");

const controller = {
    cart: (req, res) => {
        res.render("users/cart");
    },
    addCart: async (req, res) => {
        if (res.locals.isLogged == true) {
            console.log("por crear");
                await db.Cart.create({
                user_id: Number(req.session.userLogged.id),
                product_id: Number(req.params.id),
            });
            res.redirect("/");
        }else{
            let cart = [];
            let storage = req.cookies.cart;
            if(!storage){
                cart.push(req.params.id);
                res.cookie("cart", JSON.stringify(cart), {
                    maxAge: 1000 * 60 * 60*60*5000,
                });
            }else{
                storage = JSON.parse(storage);
                for (let i = 0; i < storage.length; i++) {
                    cart.push(storage[i]);
                }
                cart.push(req.params.id);
                res.cookie("cart", JSON.stringify(cart), {
                    maxAge: 1000 * 60 * 60*60*5000,
                });
            }
            res.redirect("/")
        }
    },
    register: (req, res) => {
        res.render("users/register");
    },
    saveUser: async (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            await userService.createUser(req.body);
            res.redirect("/");
        } else {
            res.render("users/register", {
                errors: errors.errors,
                old: req.body,
            });
        }
    },
    login: (req, res) => {
        res.render("users/login");
    },
    proccesLogin: async (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let userToLogin = await userService.finduser(req.body);
            if (userToLogin == undefined) {
                res.render("users/login", {
                    errors: [{ msg: "credenciales invalidas" }],
                });
            }
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            if (req.body.remember) {
                res.cookie("userEmail", req.body.email, {
                    maxAge: 1000 * 60 * 60,
                });
            }
            res.redirect("/");
        } else {
            res.render("users/login", { errors: errors.errors });
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie("userEmail");
        return res.redirect("/");
    },
};

module.exports = controller;