const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      minlength: 1,
      maxlength: 300,
      require: true,
    },
    assignDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      require: true,
    },
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
