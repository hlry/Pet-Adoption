const router = require('express').Router();
const adoptRoutes = require('../apiRoutes/adoptRoutes');
// const shareRoutes = require('../apiRoutes/shareRoutes');

router.use(adoptRoutes);
// router.use(shareRoutes);

module.exports = router;
