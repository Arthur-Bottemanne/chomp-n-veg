const database = require("@models/database");

const Consumable = {
    create: async (name, type, calories, protein, fat, carbohydrate) => {
        const query =
            "INSERT INTO consumables (name, type, calories, protein, fat, carbohydrate) VALUES (?, ?, ?, ?, ?, ?)";
        return database.query(query, [
            name,
            type,
            calories,
            protein,
            fat,
            carbohydrate,
        ]);
    },
    getByNameAndType: async (name, type) => {
        const query = "SELECT * FROM consumables WHERE name = ? and type = ?";
        return database.query(query, [name, type]);
    },
    getFoods: async () => {
        const query =
            "SELECT * FROM consumables WHERE type = 'food' ORDER BY name DESC";
        return database.query(query);
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
