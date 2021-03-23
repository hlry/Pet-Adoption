// const path = require('path');
const router = require('express').Router();

router.use('/', function (req, res,next) {
  console.log('%s %s %s %s', req.method, req.url, req.path, req.originalUrl);
  next();
})




// router.get('/assets/*',(req, res) => {
//   res.sendFile(path.join(__dirname, '../../public'));
// });
// router.get('/share', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../public/share.html'));
// });
// router.get('/', function(req, res) {
//   res.render('index');
// })
// router.get('/adopt', function (req, res, next) {
//   res.render('adopt');
//   next();
  // res.sendFile(path.join(__dirname, '../../public/adopt.html'));
// });

// router.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../public/index.html'));
// });

module.exports = router;