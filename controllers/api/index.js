const router = require('express').Router();

const petRoutes = require('./pet-routes');
// const shareRoutes = require('./shareRoutes');
// router.use('/')s
router.param('q', function(req,res,next, queryStr){
    console.log("$$$$$$$$ Q\n $$$$$ %s %s %s", req.method, req.path, req.url)
    console.log(queryStr);
}
);
router.use('/pets', petRoutes);
// router.use('/adopt', petRoutes);
// router.use('/share', shareRoutes);

// router.get('/adopt')
module.exports = router;
