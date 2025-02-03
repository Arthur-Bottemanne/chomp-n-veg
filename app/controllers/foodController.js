const Consumable = require("@models/Consumable");

const type = "food";

const createFood = async (req, res) => {
    try {
        let { name, calories, protein, fat, carbohydrate } = req.body;

        if (!name || !calories) {
            return res
                .status(400)
                .json({ message: "The name and calories fields are required" });
        }

        let hasDecimalError = false;

        const decimalPattern = /^\d{1,5}(\.\d{0,1})?$/;

        if (!decimalPattern.test(calories)) {
            hasDecimalError = true;
        }

        if (protein && !decimalPattern.test(protein)) {
            hasDecimalError = true;
        }

        if (fat && !decimalPattern.test(fat)) {
            hasDecimalError = true;
        }

        if (carbohydrate && !decimalPattern.test(carbohydrate)) {
            hasDecimalError = true;
        }

        if (hasDecimalError) {
            return res.status(400).json({
                message:
                    "The calories, protein, fat and carbohydrate fields must be a number with at most 5 digits before the decimal point and 1 digit after.",
            });
        }

        const existingFood = await Consumable.getByNameAndType(name, type);

        if (existingFood.length > 0) {
            return res.status(409).json({ message: "Food already exists" });
        }

        if (!protein) {
            protein = null;
        }

        if (!fat) {
            fat = null;
        }

        if (!carbohydrate) {
            carbohydrate = null;
        }

        await Consumable.create(
            name,
            type,
            calories,
            protein,
            fat,
            carbohydrate
        );

        res.status(201).send("Food registered successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering food");
    }
};

const getFoods = async (req, res) => {
    try {
        const foods = await Consumable.getAll();
        return foods;
    } catch (error) {
        throw error;
    }
};

module.exports = { createFood, getFoods };
