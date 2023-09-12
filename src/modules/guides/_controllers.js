const express = require("express");
const httpValidator = require("../../shared/http-validator");
const addGuide = require("./add-guide");
const listGuides = require("./list-guides");
const showGuide = require("./show-guide");
const editGuide = require("./edit-guide");
const removeGuide = require("./remove-guide");
const {
  postGuideSchema,
  listGuidesSchema,
  showGuideSchema,
  deleteGuideSchema,
  patchGuideSchema,
  listUsersGuidesSchema,
  postUserGuideSchema,
  showUserGuideSchema,
  editUserGuideSchema,
} = require("./_schemas");
const listUsersGuides = require("./list-users-guides");
const showUsersGuide = require("./post-users-guides");
const { post } = require("./_api");
const addUserGuide = require("./post-users-guides");
const showUserGuide = require("./show-user-guide");
const editUserGuide = require("./edit-user-guide");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postGuide = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postGuideSchema);

    const result = await addGuide(req.body);

    res.status(201).json({
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
const patchGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchGuideSchema);

    const result = await editGuide(req.params.id, req.body);

    res.status(201).json({
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
const getGuides = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listGuidesSchema);

    const result = await listGuides(req.query);

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
const getGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showGuideSchema);

    const result = await showGuide(req.params.id);

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
const deleteGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteGuideSchema);

    const result = await removeGuide(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Users Guides

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getUsersGuides = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listUsersGuidesSchema);

    const result = await listUsersGuides(req.user.id, req.query);

    res.status(200).json({
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
const getUserGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showUserGuideSchema);

    const result = await showUserGuide(req.params.id);

    res.status(200).json({
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
const patchUserGuide = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, editUserGuideSchema);

    const result = await editUserGuide(req.params.id);

    res.status(200).json({
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
const postUserGuide = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postUserGuideSchema);

    const result = await addUserGuide(req.body);

    res.status(200).json({
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postGuide,
  getGuide,
  getGuides,
  patchGuide,
  deleteGuide,
  getUsersGuides,
  postUserGuide,
  getUserGuide,
  patchUserGuide,
};
