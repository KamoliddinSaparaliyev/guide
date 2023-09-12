const { NotFoundError } = require("../../shared/errors");
const User = require("../users/User");
const Guide = require("./Guide");
const UserGuide = require("./UserGuide");
const showGuide = require("./show-guide");

const editGuide = async (id, changes) => {
  try {
    await showGuide(id);

    if (changes.notify) {
      const users = await User.find();
      users.map((user) => {
        UserGuide.create({
          user_id: user._id,
          guide_id: id,
        });
      });
    }

    const data = await Guide.findByIdAndUpdate(
      id,
      { ...changes },
      { new: true }
    );

    return { data };
  } catch (error) {
    throw error;
  }
};

module.exports = editGuide;
