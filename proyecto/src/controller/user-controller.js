const userService = require("../services/usersService.js");
const { validationResult } = require("express-validator");
const db = require("../database/models");

const controller = {
    cart: async (req, res) => {
        let prod = await db.Cart.findAll({
            where: { user_id: req.session.userLogged.id },
            include: [{ association: "productId" }],
        });
        res.render("users/cart", {productos: prod});
    },
    addCart: async (req, res) => {
        if (res.locals.isLogged == true) {
            console.log("por crear");
            await db.Cart.create({
                user_id: Number(req.session.userLogged.id),
                product_id: Number(req.params.id),
            });
            res.redirect("/");
        } else {
            res.redirect("/user/login");
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
