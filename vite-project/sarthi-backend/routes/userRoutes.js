const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Route for creating a new user
router.post('/signup', async (req, res) => {
  const { username, passwordHash, role, tier } = req.body;
  try {
    const newUser = new User({ username, passwordHash, role, tier });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
