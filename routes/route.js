const express = require("express");
const router = express.Router();
const { genShortID } = require("../controller/controll.js");

router.post("/", genShortID);

module.exports = router;