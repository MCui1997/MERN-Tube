const express = require("express");
const users = express.Router();
const cors = require("cors");

const Video = require("../models/Video");

users.post("/uploadfiles", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({});
  });
});

module.exports = videos;
