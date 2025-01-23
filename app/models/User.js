const database = require("@models/database");

const User = {
    create: async (name, email, hashedPassword) => {
        const query =
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        return database.query(query, [name, email, hashedPassword]);
    },
};

module.exports = User;
