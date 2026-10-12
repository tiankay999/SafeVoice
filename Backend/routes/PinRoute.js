const express = require("express");
const router = express.Router();
const { addPin, verifyPin } = require("../Controllers/pinController");
const authmiddleWare = require("../middleware/AuthmiddleWare");

router.post("/addPin", authmiddleWare,addPin);
router.post("/verifyPin", authmiddleWare,verifyPin);

module.exports = router;
