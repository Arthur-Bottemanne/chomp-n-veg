const express = require("express");
require("module-alias/register");

const app = express();

const websiteRoutes = require("@routes/Website");
app.use("/", websiteRoutes);

require("@models/database");

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
