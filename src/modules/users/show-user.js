const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const showUser = async (id) => {
  const data = await User.findById(id);

  if (!data) throw new NotFoundError("User not found");

  return { data };
};

module.exports = showUser;
