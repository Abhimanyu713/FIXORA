const handleResponse = require("../Utilis/handleResponse");
const languageJson = require("../constants/language.json");
const industryCategory = require("../constants/industryCategory.json");
const industryRole = require("../constants/industryRoles.json");
const handleGetAllLangauage = async (req, res, next) => {
  try {
    handleResponse(
      res,
      200,
      "All langauge fetched successfully!!",
      languageJson
    );
  } catch (error) {
    next(error);
  }
};

const handleGetAllIndustryCateogroy = async (req, res, next) => {
  try {
    handleResponse(
      res,
      200,
      "All List fetched successfully !!",
      industryCategory
    );
  } catch (error) {
    next(error);
  }
};

const handleGetAllIndustryRole = async (req, res, next) => {
  try {
    handleResponse(res, 200, "All List fetched successfully !!", industryRole);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleGetAllLangauage,
  handleGetAllIndustryCateogroy,
  handleGetAllIndustryRole
};
