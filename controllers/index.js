const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const shareRoutes = require('./share-routes.js');
const adoptRoutes = require('./adopt-routes.js');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use('/share', shareRoutes);
router.use('/adopt', adoptRoutes);

module.exports = router;