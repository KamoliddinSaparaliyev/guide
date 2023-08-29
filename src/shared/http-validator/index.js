const Joi = require("joi");
const { BadRequestError } = require("../errors");

/**
 * @param {{ body, params, query }} param0
 * @param {{ body: Joi.Schema, params: Joi.Schema, query: Joi.Schema }} schema
 * @returns
 */
const httpValidator = ({ body, params, query }, schema) => {
  // Destructure schema objects
  const { body: bodySchema, params: paramsSchema, query: querySchema } = schema;

  // Validate request body
  if (body) {
    const { error } = bodySchema.validate(body);
    if (error) throw new BadRequestError(error);
  }

  // Validate request params
  if (params) {
    const { error } = paramsSchema.validate(params);
    if (error) throw new BadRequestError(error);
  }

  // Validate query parameters
  if (query) {
    const { error } = querySchema.validate(query);
    if (error) throw new BadRequestError(error);
  }
};

module.exports = httpValidator;
