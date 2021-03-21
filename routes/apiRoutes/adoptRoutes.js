const router = require('express').Router();

const { Pets, User } = require('../../models');
const sequelize = require('../../config/connection');
const { Op } = require('sequelize')
// The `/api/adopt` endpoint

// get all products
router.get('/adopt', function (req, res, next) {
  if (req.query.species) {
    Pets.findAll({
      where: {
        'species': req.query.species
      },
      attributes: ['id', 'pet_name', 'color', 'species','size','age', 'potty_trained', 'vaccinated','microchip'] 
        // include: [ ]
    })
    .then(bySpecies => {
        res.json(bySpecies)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  } else {
    res.json(null)
  }
})


module.exports = router;
