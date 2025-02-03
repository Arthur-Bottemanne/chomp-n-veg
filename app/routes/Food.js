const express = require("express");
const router = express.Router();

const { verifyToken } = require("@middleware/authMiddleware");
const { createFood, getFoods } = require("@controllers/foodController");

router.get("/", verifyToken, async (req, res) => {
    try {
        const foods = await getFoods();
        res.render("food/index", { foods });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

router.get("/create", verifyToken, (req, res) => {
    res.render("food/create");
});

router.post("/", verifyToken, createFood, (req, res) => {
    res.redirect("/food");
});

module.exports = router;
