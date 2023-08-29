const express = require("express");
const {
  postUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser,
  loginUser,
  patchMe,
} = require("./_controllers");
const isLoggedIn = require("../../shared/auth/is-loggedin");

const router = express.Router();

router.post("/users", isLoggedIn, postUser);
router.get("/users", isLoggedIn, getUsers);
router.get("/users/:id", isLoggedIn, getUser);
router.patch("/users/:id", isLoggedIn, patchUser);
router.patch("/users/me", isLoggedIn, patchMe);
router.delete("/users/:id", isLoggedIn, deleteUser);
router.post("/users/login", loginUser);

module.exports = router;
