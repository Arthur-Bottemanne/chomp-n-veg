const database = require("@models/database");

const UserConsumeConsumables = {
    getConsumedConsumables: async (userId) => {
        const query =
            "SELECT * FROM users_consume_consumables WHERE fkuser = ?";
        return database.query(query, [userId]);
    },
    addConsumableToUser: async (userId, consumableId) => {
        const query =
            "INSERT INTO users_consume_consumables (fkuser, fkconsumable, quantity, date_consumed) VALUES (?, ?, 1, NOW());";
        return database.query(query, [userId, consumableId]);
    },
};

module.exports = UserConsumeConsumables;
