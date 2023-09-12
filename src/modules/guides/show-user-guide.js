const { NotFoundError } = require("../../shared/errors");
const UserGuide = require("./UserGuide");

const showUserGuide = async (id) => {
  const guide = await UserGuide.findById(id)
    .populate("guide")
    .select("-user_id");

  if (!guide) throw new NotFoundError("Guide not found");

  return guide;
};

module.exports = showUserGuide;
