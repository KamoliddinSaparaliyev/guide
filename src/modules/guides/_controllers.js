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
} = require("./_schemas");

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

    const result = await editGuide({ id: req.params.id, changes: req.body });

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

module.exports = {
  postGuide,
  getGuide,
  getGuides,
  patchGuide,
  deleteGuide,
};
