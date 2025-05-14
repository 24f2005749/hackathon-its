const express = require('express');
const Journal = require('../models/Journal');
const router = express.Router();

// Route to save journal entry
router.post('/journal', async (req, res) => {
  const { userId, content } = req.body;
  try {
    const newJournal = new Journal({ userId, content });
    await newJournal.save();
    res.status(201).json(newJournal);
  } catch (error) {
    res.status(400).json({ error: 'Failed to save journal' });
  }
});

module.exports = router;
