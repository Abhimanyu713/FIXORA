const express = require("express");

const {
  getAll,
  createCallingSession,
} = require("../controller/callingSession_controller");

const router = express.Router();

router.get("/", getAll);

router.post("/ca", createCallingSession);

module.exports = router;
