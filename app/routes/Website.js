const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("@controllers/authController");
const { verifyToken } = require("@middleware/authMiddleware")

router.get("/", (req, res) => {
    res.send("Welcome to the website!");
});

router.get("/dashboard", verifyToken, (req, res) => {
    res.send(`Protected route test!, ${req.user.email}!`);
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", loginUser);

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", registerUser);

module.exports = router;
