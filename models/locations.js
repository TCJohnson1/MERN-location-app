const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  favorites: { type: Boolean, default: false }
});

module.exports = mongoose.model("Location", locationSchema);
