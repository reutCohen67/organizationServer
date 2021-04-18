const mongoose = require('mongoose');
const { positions } = require('./positions');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true,
    },
    lastName: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      enum: positions,
      required: true,
    },
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
