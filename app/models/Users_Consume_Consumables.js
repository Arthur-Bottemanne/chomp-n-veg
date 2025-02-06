const database = require("@models/database");

const UserConsumeConsumables = {
    getConsumedConsumables: async (userId) => {
        const query =
            "SELECT * FROM users_consume_consumables WHERE fkuser = ?";
        return database.query(query, [userId]);
    },
};

module.exports = UserConsumeConsumables;
