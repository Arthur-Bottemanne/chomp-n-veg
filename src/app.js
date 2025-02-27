const express = require("express");
require("module-alias/register");
require("dotenv").config();

const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/../app/views/"));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const indexRoutes = require("@routes/Index");
const authenticationRoutes = require("@routes/Authentication");
const foodRoutes = require("@routes/Food");
const userRoutes = require("@routes/User");

app.use("/", indexRoutes);
app.use("/", authenticationRoutes);
app.use("/food", foodRoutes);
app.use("/user", userRoutes);

require("@models/database");

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
