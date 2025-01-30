const express = require("express");
require("module-alias/register");
require("dotenv").config();

const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/../app/views/"));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRoutes = require("@routes/Index");
const authenticationRoutes = require("@routes/Authentication");
const foodRoutes = require("@routes/Food");

app.use("/", indexRoutes);
app.use("/", authenticationRoutes);
app.use("/food", foodRoutes);

require("@models/database");

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
