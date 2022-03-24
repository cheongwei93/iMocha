const express = require("express");
const router = express.Router();
const db = require("../../db/index.js");
const { v4: uuidv4 } = require("uuid");
const {
  allPostcodes,
  getStates,
  getCities,
  getPostcodes,
  findPostcode,
} = require("malaysia-postcodes");

router.get("/:postcode", async (req, res) => {
  const { postcode } = req.params;
  try {
    const location = findPostcode(postcode);

    if (!location.found) {
      throw err;
    }

    res.status(200).send(location.state);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
