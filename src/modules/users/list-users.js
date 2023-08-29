const User = require("./User");

const listUsers = async ({ q, page, sort, filters }) => {
  const { limit = 10, offset = 0 } = page || {};
  const { by, order } = sort || {};
  const filter = { ...filters };

  if (q) {
    filter.$or = [
      { full_name: { $regex: q, $options: "i" } },
      { last_name: { $regex: q, $options: "i" } },
    ];
  }

  const total = await User.countDocuments(filter);
  const data = await User.find(filter)
    .sort({ [by]: order === "desc" ? -1 : 1 })
    .skip(offset)
    .limit(limit * offset)
    .select("-password");

  return { data, pageInfo: { limit, offset, total } };
};

module.exports = listUsers;
