const router = require('express').Router();
const adoptRoutes = require('../apiRoutes/adoptRoutes');
const shareRoutes = require('../apiRoutes/shareRoutes');

router.use(adoptRoutes);
router.use('/share', function (req, res, next)  {
    // ------------- PLACE HOLDER -------------------
    // Maybe link shared pet to user through session?
    console.log(req.session)
    if (req.session.countVisit) {
      // If the 'countVisit' session variable exists, increment it by 1 and set the 'firstTime' session variable to 'false'
      req.session.countPets++;
      req.session.hasPosted = true;
    } else {
      // If the 'countVisit' session variable doesn't exist, set it to 1 and set the 'firstTime' session variable to 'true'
      req.session.countPets = 1;
      req.session.hasPosted = false;
    }
    //console.log(req.session.countVisit)
    next()
})

router.use('/share', shareRoutes);

module.exports = router;
