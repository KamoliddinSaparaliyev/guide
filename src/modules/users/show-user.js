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

  const todo_guies = todo.guides.length;
  const read_guies = read.guides.length;
  const total_guides = todo_guies + read_guies;

  return {
    data: {
      ...user._doc,
      total_guides,
      todo_guies,
      read_guies,
    },
  };
};

module.exports = showUser;
