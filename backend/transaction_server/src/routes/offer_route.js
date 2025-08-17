const express = require("express");

const router = express.Router();
const {
  createOffer,
  getAllOfferAndAds,
} = require("../controller/offer_controller");
const upload = require("../middleware/multerService");

router.get("/", getAllOfferAndAds);

router.post("/register", upload.single("offer_image"), createOffer);

router.post("/p", upload.single("offer_image"), (req, res, next) => {
  console.log(req.file);
  if (!req.file) {
    return res.status(400).json({ error: "Please upload a valid image file." });
  }

  res.json({
    message: "Profile image uploaded successfully!",
    fileUrl: req.file,
  });
});

module.exports = router;
