const Joi = require("joi");
const {
  pageSchema,
  buildSortSchema,
  idValid,
} = require("../../shared/g-schema");

const postGuideSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    notify: Joi.boolean().required(),
  }),
};

const postUserGuideSchema = {
  body: Joi.object({
    guide_id: Joi.string().required(),
    user_ids: Joi.array().items(Joi.string()),
  }),
};

const showGuideSchema = {
  ...idValid,
};

const patchGuideSchema = {
  ...idValid,
  body: Joi.object({
    title: Joi.string(),
    content: Joi.string(),
    notify: Joi.boolean(),
  }),
};

const deleteGuideSchema = {
  ...idValid,
};

const listGuidesSchema = {
  query: Joi.object({
    q: Joi.string(),
    sort: buildSortSchema(["id"]),
    page: pageSchema,
  }),
};

const listUsersGuidesSchema = {
  query: Joi.object({
    filters: { completed: Joi.boolean() },
  }),
};

const showUserGuideSchema = {
  ...idValid,
};

const editUserGuideSchema = {
  ...idValid,
};

module.exports = {
  postGuideSchema,
  showGuideSchema,
  patchGuideSchema,
  deleteGuideSchema,
  listGuidesSchema,
  listUsersGuidesSchema,
  showUserGuideSchema,
  postUserGuideSchema,
  editUserGuideSchema,
};
