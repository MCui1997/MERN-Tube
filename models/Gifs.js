const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GifsSchema = new Schema({
  url: {
    type: String,
  },

  id: {
    type: Number,
  },
});

module.exports = Gifs = mongoose.model("gifs", GifsSchema);
