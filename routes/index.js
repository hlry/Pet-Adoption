const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes')

router.use('/api', apiRoutes);
router.use('/public',htmlRoutes)

//res.render('index', data);

router.use('/', htmlRoutes);

// router.get('/adopt', (req, res) => {

//   const data = {
//     pets: 
  
//   res.render('index', data);
// })
module.exports = router;