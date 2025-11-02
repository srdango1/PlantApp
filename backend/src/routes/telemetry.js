const express = require('express');
const router = express.Router();

router.get('/:deviceId/latest', async (req, res) => {
  res.json({ 
    deviceId: req.params.deviceId,
    data: {
      temperature: 25.5,
      humidity: 60,
      soilMoisture: 45
    }
  });
});

router.get('/:deviceId/history', async (req, res) => {
  res.json({ deviceId: req.params.deviceId, history: [] });
});

module.exports = router;