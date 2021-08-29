const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("server activo");
});

const mainRouter = require("./routes/main-router");

app.use("/", mainRouter);
