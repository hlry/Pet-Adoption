const router = require('express').Router();
// const {bp}

// api/share endpoint
router.use('/', function (req, res, next)  {
  // ------------- PLACE HOLDER -------------------
  // Maybe link shared pet to user through session?
  console.log(req.session)
  if (req.session.countPets) {
    // If the 'countVisit' session variable exists, increment it by 1 and set the 'firstTime' session variable to 'false'
    req.session.countPets++;
    req.session.hasId = true;
  } else {
    // If the 'countVisit' session variable doesn't exist, set it to 1 and set the 'firstTime' session variable to 'true'
    req.session.countPets = 0;
    req.session.hasId = false;
  }
  next();

  //console.log(req.session.countVisit)

});

router.post('/',  function( res,req,next) { 
  share.postPet()
}
);

module.exports = router;
