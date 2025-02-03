const express = require("express");
const router = express.Router();

const { verifyToken } = require("@middleware/authMiddleware");
const { createFood } = require("@controllers/foodController");
const { getFoods, getFoodById } = require("@models/Consumable");

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

router.get("/:id/edit", verifyToken, async (req, res) => {
    try {
        let food = await getFoodById(req.params.id);
        food = food[0];
        res.render("food/edit", { food });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

router.post("/", verifyToken, createFood, (req, res) => {
    res.redirect("/food");
});

module.exports = router;
