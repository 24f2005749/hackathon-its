const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['user', 'counselor'], required: true },
  tier: { type: String, enum: ['free', 'pro'], required: true },
  mentalData: {
    positivePoints: { type: Number, default: 0 },
    negativePoints: { type: Number, default: 0 },
    statusEmoji: { type: String, default: '🙂' },
    suggestion: { type: String, default: '' },
  }
});

module.exports = mongoose.model('User', userSchema);
