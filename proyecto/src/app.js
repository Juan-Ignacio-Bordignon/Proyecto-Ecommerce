const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(3000, () => {
    console.log("server activo");
});

const mainRouter = require("./routes/main-router");

app.use("/", mainRouter);
