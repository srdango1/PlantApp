const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  res.json({ message: 'Login a ThingsBoard', token: 'mock-token' });
});

router.get('/devices', async (req, res) => {
  res.json({ devices: [] });
});

module.exports = router;