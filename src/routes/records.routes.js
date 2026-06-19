const express = require('express');
const Record = require('../models/Record');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, async (req, res) => {
  try {
    const records = await Record.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const record = new Record({
      userId: req.user._id,
      ...req.body
    });
    const createdRecord = await record.save();
    res.status(201).json(createdRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const record = await Record.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (record) {
      res.json({ message: 'Record removed' });
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
