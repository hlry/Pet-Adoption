const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/share', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/share.html'));
});

router.get('/adopt', (req, res) => {
  
  res.sendFile(path.join(__dirname, '../../public/adopt.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;