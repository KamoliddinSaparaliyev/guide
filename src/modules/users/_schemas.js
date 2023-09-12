const Joi = require("joi");
const {
  pageSchema,
  buildSortSchema,
  idValid,
} = require("../../shared/g-schema");
const { UserRole } = require("../../shared/role");

const postUserSchema = {
  body: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    age: Joi.number().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().valid(UserRole.ADMIN, UserRole.USER).required(),
  }),
};

const showUserSchema = {
  ...idValid,
};

const patchUserSchema = {
  ...idValid,
  body: Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    age: Joi.number(),
    username: Joi.string(),
    password: Joi.string(),
    role: Joi.string().valid(UserRole.ADMIN, UserRole.USER),
  }),
};

const patchAdminMeSchema = {
  body: Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    age: Joi.number(),
    username: Joi.string(),
    password: Joi.string(),
    role: Joi.string().valid(UserRole.ADMIN, UserRole.USER),
  }),
};

const patchUserMeSchema = {
  body: Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    age: Joi.number(),
    username: Joi.string(),
  }),
};

const updatePasswordSchema = {
  ...idValid,
  body: Joi.object({
    password: Joi.string().required,
  }),
};

const deleteUserSchema = {
  ...idValid,
};

const listUsersSchema = {
  query: Joi.object({
    q: Joi.string(),
    sort: buildSortSchema(["id", "age"]),
    page: pageSchema,
    username: Joi.string(),
    filters: {
      role: Joi.string().valid("admin", "employee"),
    },
  }),
};

const loginUserSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  postUserSchema,
  showUserSchema,
  patchUserSchema,
  patchUserMeSchema,
  updatePasswordSchema,
  deleteUserSchema,
  listUsersSchema,
  loginUserSchema,
  patchAdminMeSchema,
};
