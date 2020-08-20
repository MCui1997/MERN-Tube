const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  url: {
    type: String,
  },
});

module.exports = Video = mongoose.model("videos", VideoSchema);