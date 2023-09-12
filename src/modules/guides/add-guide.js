const Guide = require("./Guide");
const UserGuide = require("./UserGuide");
const User = require("../users/User");

const addGuide = async ({ notify, ...guideData }) => {
  const guide = await Guide.create({
    ...guideData,
  });

  if (notify) {
    const users = await User.find();
    users.map((user) => {
      UserGuide.create({
        user_id: user._id,
        guide_id: guide._id,
      });
    });
  }

  return {
    data: { ...guide._doc, notified: notify },
  };
};

module.exports = addGuide;
