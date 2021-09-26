const user = require("../services/usersService");

function userLoggedMiddleware(req, res, next) {
    let isLogged = false;
    let isAdmin = false;

    let emailInCookie = req.cookies.userEmail;
    let userInCookie = user.findUserByEmail(emailInCookie);

    if(userInCookie){
        req.session.userLogged = userInCookie;
    }

    if(req.session.userLogged){
        isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    if(req.session.userLogged && req.session.userLogged.category == "admin"){
        isAdmin = true;
    }

    res.locals.isLogged = isLogged;
    res.locals.isAdmin = isAdmin;
    next();
}
module.exports = userLoggedMiddleware;
