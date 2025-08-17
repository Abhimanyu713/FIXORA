const pool = require("../config/db");

const { v4: uuidv4 } = require("uuid");

const getAllOfferAndAdsService = async () => {
  try {
    const result = await pool.query(
      "SELECT * FROM offers_and_ads_table WHERE is_active=TRUE AND end_date > NOW() "
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching offers and ads: ", error);
    throw new Error("Failed to fetch offers and ads.");
  }
};

const createOfferService = async (
  title,
  discount_type,
  discount_value,
  image_url,
  start_date,
  end_date,
  is_active,
  description
) => {
  const offer_id = uuidv4();
  const queryText = `
    INSERT INTO offers_and_ads_table(
     offer_id,title, discount_type, discount_value,image_url, start_date, end_date,is_active, description
    )
     VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9)
    RETURNING *;
    `;

  const values = [
    offer_id,
    title,
    discount_type,
    discount_value,
    image_url,
    start_date,
    end_date,
    is_active,
    description,
  ];

  try {
    const result = await pool.query(queryText, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error creating Offer: ", error);
    throw new Error("Failed to create offer .");
  }
};

module.exports = {
  createOfferService,
  getAllOfferAndAdsService,
};
