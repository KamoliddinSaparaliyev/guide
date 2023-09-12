const Guide = require("./Guide");
const UserGuide = require("./UserGuide");

const listUsersGuides = async (id, { filters }) => {
  const data = await UserGuide.find({ user_id: id, ...filters })
    .populate("guide")
    .select("-user_id");

  return data;
};

module.exports = listUsersGuides;
