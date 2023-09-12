const UserGuide = require("./UserGuide");
const showUserGuide = require("./show-user-guide");

const editUserGuide = async (id) => {
  await showUserGuide(id);

  const user_guide = await UserGuide.findByIdAndUpdate(
    id,
    { completed: true },
    { new: true }
  );

  return { ...user_guide };
};

module.exports = editUserGuide;
