const router = require('express').Router();
const adoptRoutes = require('../apiRoutes/adoptRoutes');
// const shareRoutes = require('../apiRoutes/shareRoutes');

router.use('/adopt', adoptRoutes);
// router.use(shareRoutes);

module.exports = router;
