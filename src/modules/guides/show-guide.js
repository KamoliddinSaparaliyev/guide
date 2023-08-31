const { NotFoundError } = require("../../shared/errors");
const Guide = require("./Guide");

const showGuide = async (guideId) => {
  const guide = await Guide.findById(guideId).populate("guides");

  if (!guide) throw new NotFoundError("Guide not found");

  return {
    title: guide.title,
    content: guide.content,
    revisions: guide.guides.length | 0,
  };
};

module.exports = showGuide;
