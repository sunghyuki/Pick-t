const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  participant: {
    type: [String],
    required: true,
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Room", roomSchema);
