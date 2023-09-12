const User = require("./User");

const listUsers = async ({ q, page, sort, filters, username }) => {
  const { limit = 10, offset = 0 } = page || {};
  const { by, order } = sort || {};
  const filter = { ...filters };

  if (q) {
    filter.$or = [
      { first_name: { $regex: q, $options: "i" } },
      { last_name: { $regex: q, $options: "i" } },
    ];
  }
  if (username) {
    filter.username = username;
  }

  const total = await User.countDocuments({ ...filter });
  const data = await User.find({ ...filter })
    .sort({ [by]: order === "desc" ? -1 : 1 })
    .limit(+limit)
    .skip(+offset * +limit)
    .select("-password");

  return { data, pageInfo: { limit: +limit, offset: +offset, total } };
};

module.exports = listUsers;
