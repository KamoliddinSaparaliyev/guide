const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  postGuide,
  getGuides,
  getGuide,
  patchGuide,
  deleteGuide,
} = require("./_controllers");
const isAdmin = require("../../shared/auth/is-admin");

const router = express.Router();

router.get("/guides", isLoggedIn, getGuides);
router.get("/guides/:id", isLoggedIn, getGuide);
router.post("/guides", isLoggedIn, postGuide);
router.patch("/guides/:id", isLoggedIn, isAdmin, patchGuide);
router.delete("/guides/:id", isLoggedIn, deleteGuide);

//employee

module.exports = router;
