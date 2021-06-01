const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  nickname: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },

  licenseNumber: {
    type: String,
    required: true,
    unique: true,
  },

  licensePrimaryKey: {
    type: String,
    required: true,
    unique: true,
  },

  licenseType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
