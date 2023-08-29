const { NotFoundError, BadRequestError } = require("../../shared/errors");
const User = require("./User");
const changePassword = require("./change-password");

const editUser = async ({ id, changes }) => {
  try {
    const existingUser = await User.findOne({ _id: id });
    if (!existingUser) throw new NotFoundError("User not found");

    if (changes.username) {
      const existingUsername = await User.findOne({
        username: changes.username,
      });

      if (existingUsername)
        throw new BadRequestError("Username already exists");
    }

    let updatedFields = {};

    if (changes.password) {
      const newPasswordHash = await changePassword(
        existingUser.password,
        changes.password
      );
      updatedFields.password = newPasswordHash;
    }

    const data = await User.findByIdAndUpdate(
      id,
      { ...changes, ...updatedFields },
      { new: true }
    );

    return { data };
  } catch (error) {
    throw error;
  }
};

module.exports = editUser;
