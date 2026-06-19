const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  time: { type: String, required: true },
  frequency: { type: String, required: true, enum: ['Monthly', 'Annual', 'One-time', 'Weekly'] },
  date: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Reminder', ReminderSchema);
