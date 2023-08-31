const Guide = require("./Guide");

const listGuides = async ({ q, page, sort }) => {
  const { limit = 10, offset = 0 } = page || {};
  const { by, order } = sort || {};

  const filter = {};

  if (q) filter.$or = [{ title: { $regex: q, $options: "i" } }];

  const total = await Guide.countDocuments({ ...filter });
  const data = await Guide.find({ ...filter })
    .sort({ [by]: order === "desc" ? -1 : 1 })
    .limit(+limit)
    .skip(+offset * +limit);

  console.log(+offset * +limit);

  return { data, pageInfo: { limit: +limit, offset: +offset, total } };
};

module.exports = listGuides;
