module.exports = (req, res, next) => {
    if(!res.locals.isAdmin){
        res.redirect("/");
    }
    next();
};
