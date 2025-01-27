const bcrypt = require("bcrypt");
const User = require("@models/User");

const saltRounds = 10;

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await User.create(name, email, hashedPassword);

        res.status(201).send("User registered successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error registering user");
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    let user = await User.getByEmail(email);

    user = user[0] ? user[0] : null;

    console.log(user);

    bcrypt.compare(password, user.password, function (error, result) {
        console.log(result);
    });
};

module.exports = { registerUser, loginUser };
