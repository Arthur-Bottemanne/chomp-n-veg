const express = require("express");
const router = express.Router();

const { verifyToken } = require("@middleware/authMiddleware");
const {
    addConsumableToUser,
    getConsumablesNotConsumed,
} = require("@controllers/userController");

router.get("/consumables/add", verifyToken, async (req, res) => {
    const consumables = await getConsumablesNotConsumed(req, res);

    res.render("user/consumable/add", { consumables });
});

router.post("/consumables/add/:id", verifyToken, async (req, res) => {
    await addConsumableToUser(req, res);

    res.redirect("/dashboard");
});

module.exports = router;
