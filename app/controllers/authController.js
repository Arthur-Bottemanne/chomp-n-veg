const bcrypt = require("bcrypt");
const User = require("@models/User");

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create(name, email, hashedPassword);

        res.status(201).send("User registered successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering user");
    }
};

module.exports = { registerUser };
