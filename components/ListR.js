const express = require('express');
const ListS = require('./ListS');
const router = express.Router();

router.post('/create-task', async (req, res) => {
  try {
    await ListS.create(req.body);
    const tasks = await ListS.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await ListS.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Task by ID
router.get('/update-task/:id', async (req, res) => {
  try {
    const task = await ListS.findById(req.params.id);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Task
router.put('/update-task/:id', async (req, res) => {
  try {
    const updatedTask = await ListS.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Task
router.delete('/delete-task/:id', async (req, res) => {
  try {
    await ListS.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;