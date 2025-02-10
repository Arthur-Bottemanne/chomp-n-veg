const express = require("express");
const router = express.Router();

const { verifyToken } = require("@middleware/authMiddleware");
const { addConsumableToUser } = require("@controllers/userController");
const { getConsumables } = require("@models/Consumable");

router.get("/consumables/add", verifyToken, async (req, res) => {
    const consumables = await getConsumables();

    res.render("user/consumable/add", { consumables });
});

router.post("/consumables/add/:id", verifyToken, async (req, res) => {
    await addConsumableToUser(req, res);

    res.redirect("/dashboard");
});

module.exports = router;
