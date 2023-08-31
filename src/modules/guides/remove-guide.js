const { NotFoundError } = require("../../shared/errors");
const Guide = require("./Guide");

const removeGuide = async ({ id }) => {
  const existing = await Guide.findById(id);

  if (!existing) throw new NotFoundError("Guide not found");

  const data = await Guide.findByIdAndRemove(id);

  return { data };
};
module.exports = removeGuide;
