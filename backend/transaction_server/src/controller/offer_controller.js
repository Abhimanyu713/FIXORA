const {
  createOfferService,
  getAllOfferAndAdsService,
} = require("../models/offers_Model");

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

const getAllOfferAndAds = async (req, res, next) => {
  try {
    const allOfferAndAds = await getAllOfferAndAdsService();
    handleResponse(
      res,
      201,
      "Offer is fetched successfully !!!",
      allOfferAndAds
    );
  } catch (error) {
    next(error);
  }
};

const createOffer = async (req, res, next) => {
  const {
    title,
    discount_type,
    discount_value,
    start_date,
    end_date,
    is_active,
    description,
  } = req.body;

  const image_url = req.file.path;
  try {
    const offer = await createOfferService(
      title,
      discount_type,
      discount_value,
      image_url,
      start_date,
      end_date,
      is_active,
      description
    );
    handleResponse(res, 201, "Offer is created successfully !!!", offer);
  } catch (error) {
    next(error);
  }
};

module.exports = { createOffer, getAllOfferAndAds };
