const { check } = require("express-validator");

let validateCreate = [
    check("title")
        .notEmpty().withMessage("Debes incluir el nombre del producto").bail()
        .isLength({min:5}).withMessage("El nombre del producto debe tener como minimo 5 caracteres"),
    check("price")
        .notEmpty().withMessage("Debes incluir el precio").bail(),
    /*check("img")
        .notEmpty().withMessage("Debes incluir una imagen").bail(),*/
    check("description")
        .notEmpty().withMessage("Debes incluir una descripción").bail()
        .isLength({min:20}).withMessage("El nombre del producto debe tener como minimo 5 caracteres"),

];

module.exports = validateCreate;