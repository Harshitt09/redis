const express = require("express");
const router = express.Router();
const register = require("../controller/userRegister");
const login = require("../controller/login");
const post = require("../controller/post");
const jwt = require("../model/jwt");

router.post("/register", register.userRegisterData);
router.post("/login", login.loginUser);
router.post("/post", jwt.tokenVerify, post.createPost);
module.exports = router;
