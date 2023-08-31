const Joi = require("joi");
const { pageSchema, buildSortSchema } = require("../../shared/g-schema");

const postGuideSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    notify: Joi.boolean().required(),
  }),
};

const showGuideSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

const patchGuideSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    title: Joi.string(),
    content: Joi.string(),
    notify: Joi.boolean(),
  }),
};

const deleteGuideSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

const listGuidesSchema = {
  query: Joi.object({
    q: Joi.string(),
    sort: buildSortSchema(["id"]),
    page: pageSchema,
  }),
};

module.exports = {
  postGuideSchema,
  showGuideSchema,
  patchGuideSchema,
  deleteGuideSchema,
  listGuidesSchema,
};
