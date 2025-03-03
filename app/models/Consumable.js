const database = require("@models/database");

const Consumable = {
    validateParameters: (name, calories, protein, fat, carbohydrate) => {
        if (!name || !calories) {
            return "The name and calories fields are required";
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
            return "The calories, protein, fat and carbohydrate fields must be a number with at most 5 digits before the decimal point and 1 digit after.";
        } else {
            return true;
        }
    },
    create: async (name, type, calories, protein, fat, carbohydrate, image) => {
        const query =
            "INSERT INTO consumables (name, type, calories, protein, fat, carbohydrate, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)";
        return database.query(query, [
            name,
            type,
            calories,
            protein,
            fat,
            carbohydrate,
            image,
        ]);
    },
    update: async (id, name, calories, protein, fat, carbohydrate) => {
        const query = `
            UPDATE consumables 
            SET name = ?, calories = ?, protein = ?, fat = ?, carbohydrate = ?
            WHERE id = ?
        `;
        return database.query(query, [
            name,
            calories,
            protein,
            fat,
            carbohydrate,
            id,
        ]);
    },
    delete: async (id) => {
        const query = `DELETE FROM consumables WHERE id = ?`;
        return database.query(query, [id]);
    },
    getByNameAndType: async (name, type) => {
        const query = "SELECT * FROM consumables WHERE name = ? and type = ?";
        return database.query(query, [name, type]);
    },
    getConsumables: async () => {
        const query =
            "SELECT * FROM consumables ORDER BY name DESC";
        return database.query(query);
    },
    getFoods: async () => {
        const query =
            "SELECT * FROM consumables WHERE type = 'food' ORDER BY name DESC";
        return database.query(query);
    },
    getConsumableById: async (id) => {
        const query =
            "SELECT * FROM consumables WHERE id = ?";
        return database.query(query, [id]);
    },
    getFoodById: async (id) => {
        const query =
            "SELECT * FROM consumables WHERE id = ? and type = 'food'";
        return database.query(query, [id]);
    },
    searchByName: async (name) => {
        const query = "SELECT * FROM consumables WHERE name LIKE ?";
        return database.query(query, [`%${name}%`]);
    },
};

module.exports = Consumable;
