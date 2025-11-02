const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ message: 'Lista de dispositivos', devices: [] });
});

router.get('/:id', async (req, res) => {
  res.json({ message: `Dispositivo ${req.params.id}` });
});

router.post('/', async (req, res) => {
  res.status(201).json({ message: 'Dispositivo creado', data: req.body });
});

module.exports = router;