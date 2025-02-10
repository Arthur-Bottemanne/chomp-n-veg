const UserConsumeConsumables = require("@models/Users_Consume_Consumables");
const Consumable = require("@models/Consumable");
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

const getConsumablesNotConsumed = async (req, res) => {
    let user = await User.getByEmail(req.user.email);

    user = user ? user[0] : null;

    const consumedConsumables =
        await UserConsumeConsumables.getConsumedConsumables(user.id);

    const consumables = await Consumable.getConsumables();

    const consumablesNotConsumed = consumables.filter(
        (consumable) =>
            !consumedConsumables.some((c) => c.fkconsumable === consumable.id)
    );

    return consumablesNotConsumed;
};

module.exports = { addConsumableToUser, getConsumablesNotConsumed };
