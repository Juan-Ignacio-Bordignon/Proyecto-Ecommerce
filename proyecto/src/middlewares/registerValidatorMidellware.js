const { check } = require("express-validator");

let validateRegister = [
    check("user_name")
        .notEmpty().withMessage("debes completar el nombre de usuario").bail()
        .isLength({ min: 5, max: 30 }).withMessage("El nombre de usuario debe tener entre 5 y 30 caracteres"),
    check("email")
        .notEmpty().withMessage("debes completar el email").bail()
        .isEmail().withMessage("debes completar con un email válido"),
    check("password")
        .notEmpty().withMessage("debes completar la contraseña").bail()
        .isStrongPassword().withMessage("la contraseña debe tener como minimo 8 caracteres, una mayuscula, un numero y un caracter especial")
        .custom((value, { req }) => {
            if (value !== req.body.confirmPassword) {
                throw new Error("Las contraseñas no coinciden");
            }
            return true;
        }),
    check("confirmPassword")
        .notEmpty().withMessage("debes completar la confitmación de contraseña").bail(),
];

module.exports = validateRegister;
