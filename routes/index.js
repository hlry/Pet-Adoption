const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes')

router.use('/public',htmlRoutes)
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;