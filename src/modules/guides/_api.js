const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  postGuide,
  getGuides,
  getGuide,
  patchGuide,
  deleteGuide,
  getUsersGuides,
  postUserGuide,
  getUserGuide,
  patchUserGuide,
} = require("./_controllers");
const isAdmin = require("../../shared/auth/is-admin");

const router = express.Router();

router.get("/guides", isLoggedIn, getGuides);
router.get("/guides/:id", isLoggedIn, getGuide);
router.post("/guides", isLoggedIn, isAdmin, postGuide);
router.patch("/guides/:id", isLoggedIn, isAdmin, patchGuide);
router.delete("/guides/:id", isLoggedIn, isAdmin, deleteGuide);
//user-guide
router.get("/user-guides", isLoggedIn, getUsersGuides);
router.get("/user-guides/:id", isLoggedIn, getUserGuide);
router.patch("/user-guides/:id", isLoggedIn, patchUserGuide);
router.post("/user-guides/bulk", isLoggedIn, postUserGuide);

module.exports = router;
