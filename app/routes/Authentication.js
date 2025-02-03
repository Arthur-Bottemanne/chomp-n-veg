const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("@controllers/authController");

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", async (req, res) => {
    let token;

    try {
        token = await loginUser(req, res);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }

    if (token === null) return;

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.redirect("/dashboard");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", registerUser);

module.exports = router;
