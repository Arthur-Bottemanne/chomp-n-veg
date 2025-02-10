const UserConsumeConsumables = require("@models/Users_Consume_Consumables");
const User = require("@models/User");
const Consumable = require("@models/Consumable");

const getDashboardData = async (req, res) => {
    let user = await User.getByEmail(req.user.email);

    user = user ? user[0] : null;

    const consumedConsumables =
        await UserConsumeConsumables.getConsumedConsumables(user.id);

    const consumablesDetails = await Promise.all(
        consumedConsumables.map(async (consumable) => {
            let consumableDetails = await Consumable.getConsumableById(
                consumable.fkconsumable
            );

            consumableDetails = consumableDetails ? consumableDetails[0] : null;
            consumableDetails.quantity = consumable.quantity;
            consumableDetails.time = UserConsumeConsumables.getTimeFromDateTime(
                consumable.date_consumed
            );

            return consumableDetails;
        })
    );

    return { consumables: consumablesDetails };
};

module.exports = { getDashboardData };
