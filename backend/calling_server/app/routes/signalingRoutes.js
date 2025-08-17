const express = require("express");
const { getStatus } = require("../controllers/signalingController");
const router = express.Router();

router.get("/", getStatus);

module.exports = router;
