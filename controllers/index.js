const router = require('express').Router();

const apiRoutes = require('./api');
const shareRoutes = require('./share-routes.js');
const adoptRoutes = require('./adopt-routes.js');
const homeRoutes = require('./home-routes.js');
// router.use(function (req, res, next) {
//     console.log("## APP %s %s %s %s ", req.method, req.path, req.url, req.query,  req.params)
//     // next('route');
// })

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use('/share', shareRoutes);
router.use('/adopt', adoptRoutes);

module.exports = router;