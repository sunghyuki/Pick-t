const mongoose = require("mongoose");

const likeListSchema = new mongoose.Schema({
  guestId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  trailer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Trailer",
  },

  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("LikeList", likeListSchema);
