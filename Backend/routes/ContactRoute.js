const express = require("express");
const router = express.Router();
const { addContact, getContact } = require("../Controllers/contactController");
const authmiddleWare = require("../middleware/AuthmiddleWare");

router.post("/addContact", authmiddleWare,addContact);
router.get("/getContact/:id", authmiddleWare,getContact);

module.exports = router;

