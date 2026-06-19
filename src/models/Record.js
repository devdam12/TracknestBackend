const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  dueDate: { type: String, required: true },
  description: { type: String, default: "" },
  status: { type: String, default: "normal" }
}, { timestamps: true });

module.exports = mongoose.model('Record', RecordSchema);
