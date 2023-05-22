const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  email: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9@.]*$/
  },
  message: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
