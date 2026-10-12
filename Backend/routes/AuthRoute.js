const express = require("express");
const router = express.Router();
const { signup, login, UpdateProfile } = require("../Controllers/AuthController");
const authmiddleWare = require("../middleware/AuthmiddleWare");

router.post("/signup", signup);
router.post("/login", login);
router.put("/updateProfile/:id", authmiddleWare,UpdateProfile);

module.exports = router;
