const user = require("../services/usersService");

async function userLoggedMiddleware(req, res, next) {
    let isLogged = false;
    let isAdmin = false;
    let userInCookie = undefined;

    let emailInCookie = req.cookies.userEmail;
    if (emailInCookie != undefined) {
        userInCookie = await user.findUserByEmail(emailInCookie);
    }

    if (userInCookie != undefined) {
        req.session.userLogged = userInCookie;
    }

    if (req.session.userLogged) {
        isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    if (req.session.userLogged && req.session.userLogged.admin == "1") {
        isAdmin = true;
    }

    res.locals.isLogged = isLogged;
    res.locals.isAdmin = isAdmin;
    next();
}
module.exports = userLoggedMiddleware;
