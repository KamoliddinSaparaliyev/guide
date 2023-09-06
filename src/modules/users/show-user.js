const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const showUser = async (id) => {
  const user = await User.findById(id).select("-password");

  if (!user) throw new NotFoundError("User not found");

  const read = await User.findById(id).populate({
    path: "guides",
    match: { completed: true },
  });

  const todo = await User.findById(id).populate({
    path: "guides",
    match: { completed: false },
  });

  const todo_guides = todo.guides.length;
  const read_guides = read.guides.length;
  const total_guides = todo_guides + read_guides;

  return {
    data: {
      ...user._doc,
      total_guides,
      todo_guides,
      read_guides,
    },
  };
};

module.exports = showUser;
