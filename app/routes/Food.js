const express = require("express");
const router = express.Router();

const { verifyToken } = require("@middleware/authMiddleware");

router.get("/create", verifyToken, (req, res) => {
    res.render("food/create");
});

module.exports = router;
