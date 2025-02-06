const express = require("express");
const router = express.Router();

const { verifyToken } = require("@middleware/authMiddleware");

router.get("/", (req, res) => {
    res.send("Welcome to the website!");
});

router.get("/dashboard", verifyToken, (req, res) => {
    res.send(`Protected route test!, ${req.user.email}!`);
});

module.exports = router;
