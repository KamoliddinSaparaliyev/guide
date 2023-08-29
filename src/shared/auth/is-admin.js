const { ForbiddenError } = require("../errors");
const express = require("express");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const isUser = async (req, res, next) => {
  try {
    if (req.user.is_super) throw new ForbiddenError("Ruxsat yo'q");

    return res.status(200);
  } catch (error) {
    next(error);
  }
};
module.exports = isUser;
