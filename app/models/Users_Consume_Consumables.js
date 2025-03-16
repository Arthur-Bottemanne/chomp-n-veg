const database = require("@models/database");

const UserConsumeConsumables = {
    getTimeFromDateTime: (dateTime) => {
        const date = new Date(dateTime);

        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");

        return (time = `${hours}:${minutes}:${seconds}`);
    },
    getConsumedConsumables: async (userId) => {
        const query = `
            SELECT * FROM users_consume_consumables
            WHERE fkuser = ? AND DATE(date_consumed) = CURDATE();
        `;
        return database.query(query, [userId]);
    },
    addConsumableToUser: async (userId, consumableId) => {
        const query =
            "INSERT INTO users_consume_consumables (fkuser, fkconsumable, quantity, date_consumed) VALUES (?, ?, 1, NOW());";
        return database.query(query, [userId, consumableId]);
    },
};

module.exports = UserConsumeConsumables;
