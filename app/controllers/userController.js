const UserConsumeConsumables = require("@models/Users_Consume_Consumables");
const User = require("@models/User");

const addConsumableToUser = async (req, res) => {
    let user = await User.getByEmail(req.user.email);
    const consumableId = req.params.id;

    user = user ? user[0] : null;

    console.log(user);

    const result = await UserConsumeConsumables.addConsumableToUser(
        user.id,
        consumableId
    );

    return result;
};

module.exports = { addConsumableToUser };
