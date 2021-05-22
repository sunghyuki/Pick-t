const mongoose = require("mongoose");

const reservationListSchema = new mongoose.Schema({
  guestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  trailer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trailer",
  },

  date_start: {
    type: Date,
    required: true,
  },

  date_end: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("ReservationList", reservationListSchema);
