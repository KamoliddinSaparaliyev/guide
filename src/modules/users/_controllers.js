const express = require("express");
const httpValidator = require("../../shared/http-validator");
const addUser = require("./add-user");
const listUsers = require("./list-users");
const showUser = require("./show-user");
const login = require("./login-user");
const editUser = require("./edit-user");
const removeUser = require("./remove-user");
const {
  postUserSchema,
  patchUserSchema,
  patchUserMeSchema,
  listUsersSchema,
  showUserSchema,
  loginUserSchema,
  deleteUserSchema,
  patchAdminMeSchema,
} = require("./_schemas");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postUserSchema);

    const result = await addUser(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchUserSchema);

    const result = await editUser({ id: req.params.id, changes: req.body });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchMe = async (req, res, next) => {
  try {
    const schema =
      req.user.role === "admin" ? patchAdminMeSchema : patchUserMeSchema;

    httpValidator({ body: req.body }, schema);

    const result = await editUser({ id: req.user.id, changes: req.body });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUsers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listUsersSchema);

    const result = await listUsers(req.query);

    res.status(200).json({
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showUserSchema);

    const result = await showUser(req.params.id);

    res.status(200).json({
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getMe = async (req, res, next) => {
  try {
    const result = await showUser(req.user.id);

    res.status(200).json({
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteUserSchema);

    const result = await removeUser(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const loginUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, loginUserSchema);

    const result = await login(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  postUser,
  getUser,
  getMe,
  getUsers,
  patchUser,
  patchMe,
  deleteUser,
  loginUser,
};
