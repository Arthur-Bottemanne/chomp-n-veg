const database = require("@models/database");

const User = {
    create: async (name, email, hashedPassword) => {
        const query =
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        return database.query(query, [name, email, hashedPassword]);
    },
    getByEmail: async (email) => {
        const query =
            "SELECT id, name, email, password FROM users WHERE email = ?";
        return database.query(query, [email]);
    },
};

module.exports = User;
