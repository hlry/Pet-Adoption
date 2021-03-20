const router = require('express').Router();

const { Pets, User } = require('../../models');
const sequelize = require('../../config/connection');

// The `/api/adopt` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  Pets.findAll({
    attributes: ['id', 'pet_name', 'color', 'species','size','age','potty_trained','vaccinated','microchip'] //,'description','user_id'],
    // include: [ ]
  })
  .then(allData=> res.json(allData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});


module.exports = router;
