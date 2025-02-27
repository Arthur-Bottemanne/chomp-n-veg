const express = require("express");
const router = express.Router();

const { verifyToken } = require("@middleware/authMiddleware");
const { getDashboardData } = require("@controllers/dashboardController");

router.get("/", (req, res) => {
    res.send("Welcome to the website!");
});

router.get("/dashboard", verifyToken, async (req, res) => {
    const dashboardData = await getDashboardData(req, res);
    const consumables = dashboardData.consumables;

    console.log(consumables);

    res.render("dashboard", { consumables });
});

module.exports = router;
