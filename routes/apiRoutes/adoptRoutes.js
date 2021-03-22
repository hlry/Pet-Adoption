const router = require('express').Router();

const { Pets, User } = require('../../models');
const sequelize = require('../../config/connection');
const { Op } = require('sequelize');
const { flattenQuery } = require('../../utils');
// The `/api/adopt` endpoint

// get all products
router.get('/', function (req, res) {
  console.log(req.query);
  // console.log(flattenQuery(req.query));
  if (req.query.species) {
    Pets.findAll({
      where: {
        'species': req.query.species
      },
      attributes: ['id', 'pet_name', 'color', 'species','size','age', 'potty_trained', 'vaccinated','microchip','user_id'] 
        // include: [ ]
    })
    .then(bySpecies => {
      const data = {
        pets: bySpecies
      }
      res.render('index', data)
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
