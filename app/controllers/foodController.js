const Consumable = require("@models/Consumable");

const type = "food";

const createFood = async (req, res) => {
    let { name, calories, protein, fat, carbohydrate } = req.body;
    const isParametersValid = Consumable.validateParameters(
        name,
        calories,
        protein,
        fat,
        carbohydrate
    );

    if (isParametersValid != true) {
        res.status(400).json({ message: isParametersValid });
        return;
    }

    try {
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

const updateFood = async (req, res) => {
    const id = req.params.id;
    let { name, calories, protein, fat, carbohydrate } = req.body;
    const isParametersValid = Consumable.validateParameters(
        name,
        calories,
        protein,
        fat,
        carbohydrate
    );

    if (isParametersValid != true) {
        res.status(400).json({ message: isParametersValid });
        return;
    }

    try {
        if (!protein) {
            protein = null;
        }

        if (!fat) {
            fat = null;
        }

        if (!carbohydrate) {
            carbohydrate = null;
        }

        const result = await Consumable.update(
            id,
            name,
            calories,
            protein,
            fat,
            carbohydrate
        );

        if (result.affectedRows === 0) {
            return res.status(404).send("Food item not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering food");
    }
};

const deleteFood = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Consumable.delete(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Food item not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting food");
    }
};

module.exports = { createFood, updateFood, deleteFood };
