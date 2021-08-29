const path = require("path");

const controller = {
    index: (req, res) => {
        res.render("index");
    },
    detail: (req, res) => {
        res.render("productDetail");
    },
    cart: (req, res) => {
        res.render("productCart");
    },
    register: (req, res) => {
        res.render("register");
    },
    login: (req, res) => {
        res.render("login");
    },
};

module.exports = controller;