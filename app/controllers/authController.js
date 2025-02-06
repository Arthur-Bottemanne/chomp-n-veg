const bcrypt = require("bcrypt");
const User = require("@models/User");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.getByEmail(email);

        if (existingUser.length > 0) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await User.create(name, email, hashedPassword);

        res.status(201).send("User registered successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering user");
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({
                message: "Email and password are required",
            });
            return null;
        }

        let user = await User.getByEmail(email);

        if (!user.length) {
            res.status(401).json({ message: "Invalid email or password" });
            return null;
        }

        user = user[0];

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res
                .status(401)
                .json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return token;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

module.exports = { registerUser, loginUser };
