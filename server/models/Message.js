const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Type.ObjectId,
    required: true,
    ref: "Room",
  },
  sender: {
    type: mongoose.Schema.Type.ObjectId,
    required: true,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", chatSchema);
