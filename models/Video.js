const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  id: {
    type: Number,
  },
});

module.exports = Video = mongoose.model("videos", VideoSchema);
