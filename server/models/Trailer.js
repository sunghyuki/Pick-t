const mongoose = require("mongoose");

const trailerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  publishedDate: {
    type: Date,
    default: Date.now,
  },

  trailerPhoto: {
    type: String,
    required: true,
  },

  trailerName: {
    type: String,
    required: true,
  },

  license: {
    type: String,
    required: true,
  },

  rentalPlace: {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
        index: "2dsphere",
      },
    },
    // type: mongoose.Schema.Types.ObjectId,
    // required: true,
    // ref: "ParkingLot",
  },

  cost: {
    type: String,
    required: true,
  },

  capacity: {
    type: String,
    required: true,
  },

  facilities: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Trailer", trailerSchema);
