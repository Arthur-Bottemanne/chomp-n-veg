const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const {
    createFood,
    updateFood,
    deleteFood,
} = require("@controllers/foodController");

const { verifyToken } = require("@middleware/authMiddleware");
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
    res.render("food/create", { filestackKey: process.env.IMAGE_STORAGE_KEY });
});

router.get("/:id/edit", verifyToken, async (req, res) => {
    try {
        let food = await getFoodById(req.params.id);
        food = food[0];
        res.render("food/edit", {
            food,
            filestackKey: process.env.IMAGE_STORAGE_KEY,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

router.put("/:id", verifyToken, async (req, res) => {
    try {
        await updateFood(req, res);

        res.redirect(`/food`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

router.post("/", verifyToken, upload.none(), async (req, res) => {
    try {
        await createFood(req, res);

        res.redirect("/food");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

router.post("/delete/:id", verifyToken, async (req, res) => {
    await deleteFood(req, res);
    res.redirect("/food");
});

module.exports = router;
