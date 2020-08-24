const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GifsSchema = new Schema({
  url: {
    type: String,
  },

  id: {
    type: Number,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Gifs = mongoose.model("gifs", GifsSchema);
