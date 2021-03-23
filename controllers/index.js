const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js')
const adoptRoutes = require('./adopt-routes.js')
router.use(function (req, res, next) {
    console.log("## APP %s %s %s %s", req.method, req.path, req.url, req.query,  req.params)
    next();
})



router.use('/adopt', adoptRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.get('/adopt', function(req,res) {
//      res.render('adopt');
//  })


module.exports = router;