const Guide = require("./Guide");
const UserGuide = require("./UserGuide");
const User = require("../users/User");
const showGuide = require("./show-guide");
const showUser = require("../users/show-user");

const addUserGuide = async ({ guide_id, user_ids }) => {
  await showGuide(guide_id);

  user_ids.map(async (user) => {
    await showUser(user);
  });

  user_ids.map(async (user) => {
    await UserGuide.create({
      user_id: user,
      guide_id,
    });
  });

  return {
    success: true,
  };
};

module.exports = addUserGuide;
