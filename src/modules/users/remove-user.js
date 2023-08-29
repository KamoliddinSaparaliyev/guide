const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const removeUser = async ({ id }) => {
  const existing = await User.findById(id);

  if (!existing) throw new NotFoundError("User not found");

  const data = await User.findByIdAndRemove(id);

  return { data };
};
module.exports = removeUser;
