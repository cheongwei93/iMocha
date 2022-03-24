const express = require("express");
const router = express.Router();
const db = require("../../db/index.js");
const { v4: uuidv4 } = require("uuid");

router.post("/", async (req, res) => {
  const { name, dob, address, postcode, state } = req.body;
  try {
    const sql = "INSERT INTO users SET ?";
    const obj = {
      userId: uuidv4(),
      name: name,
      dob: dob,
      address: address,
      postcode: postcode,
      stateId: state,
    };
    db.query(sql, obj, (err, result) => {
      if (err) throw err;
      res.status(200).send("User's details added successfully");
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
