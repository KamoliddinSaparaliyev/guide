const { NotFoundError } = require("../../shared/errors");
const Guide = require("./Guide");
const UserGuide = require("./UserGuide");

const editGuide = async ({ id, changes }) => {
  try {
    const existing = await Guide.findOne({ _id: id });

    if (!existing) throw new NotFoundError("Guide not found");

    if (changes.notify) {
      const users = await listUsers();
      users.data.map((user) => {
        UserGuide.create({
          user_id: user.id,
          guide_id: existing.id,
        });
      });
    }

    const data = await Guide.findByIdAndUpdate(
      id,
      { ...changes },
      { new: true }
    );

    return { data };
  } catch (error) {
    throw error;
  }
};

module.exports = editGuide;
