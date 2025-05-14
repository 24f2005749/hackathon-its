const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  content: { type: String },
  sentimentScore: { type: Number, default: 0 }, // Optionally save sentiment score from AI
});

module.exports = mongoose.model('Journal', journalSchema);
