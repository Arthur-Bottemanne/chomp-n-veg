const express = require("express");
const router = express.Router();

const { verifyToken } = require("@middleware/authMiddleware");
const { createFood } = require("@controllers/foodController");

router.get("/create", verifyToken, (req, res) => {
    res.render("food/create");
});

router.post("/", verifyToken, createFood, (req, res) => {
    res.redirect("/food")
});

module.exports = router;
