const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes')

router.use('/public',htmlRoutes)
router.use('/api', apiRoutes);

// Use apiRoutes
// app.use(routes);

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;