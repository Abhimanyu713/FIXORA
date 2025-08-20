const express = require("express");
const {
  handleGetAllLangauage,
  handleGetAllIndustryCateogroy,
  handleGetAllIndustryRole,
} = require("../controller/listsController");
const router = express.Router();

router.get("/language", handleGetAllLangauage);

router.get("/industryCategory", handleGetAllIndustryCateogroy);

router.get("/industryRole", handleGetAllIndustryRole);

module.exports = router;
 