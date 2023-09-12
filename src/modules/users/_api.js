const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  postUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser,
  loginUser,
  patchMe,
  getMe,
} = require("./_controllers");
const isAdmin = require("../../shared/auth/is-admin");

const router = express.Router();

router.get("/users", isLoggedIn, isAdmin, getUsers);
router.get("/users/me", isLoggedIn, getMe);
router.get("/users/:id", isLoggedIn, isAdmin, getUser);
router.post("/users", isLoggedIn, isAdmin, postUser);
router.patch("/users/me", isLoggedIn, patchMe);
router.patch("/users/:id", isLoggedIn, isAdmin, patchUser);
router.delete("/users/:id", isLoggedIn, isAdmin, deleteUser);
router.post("/users/login", loginUser);

module.exports = router;
