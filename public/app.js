const express = require("express");
require("module-alias/register");
require("dotenv").config();

const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/../app/views/"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const websiteRoutes = require("@routes/Website");
app.use("/", websiteRoutes);

require("@models/database");

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
