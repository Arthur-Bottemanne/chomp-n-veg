const UserConsumeConsumables = require("@models/Users_Consume_Consumables");
const User = require("@models/User");

const getDashboardData = async (req, res) => {
    const user = await User.getByEmail(req.user.email);
    const consumedConsumables = await UserConsumeConsumables.getConsumedConsumables(user.id);

    return { consumables: consumedConsumables };
};

module.exports = { getDashboardData };
