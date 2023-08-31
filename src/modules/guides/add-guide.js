const Guide = require("./Guide");
const listUsers = require("../users/list-users");
const UserGuide = require("./UserGuide");
const User = require("../users/User");

const addGuide = async ({ notify, ...guideBody }) => {
  const guide = await Guide.create({
    ...guideBody,
  });

  if (notify) {
    const users = await User.find();
    users.map((user) => {
      UserGuide.create({
        user_id: user.id,
        guide_id: guide.id,
      });
    });
  }

  return {
    data: { title: guide.title, content: guide.content, notified: notify },
  };
};

module.exports = addGuide;
