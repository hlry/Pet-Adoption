const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pets, User } = require('../models');
const {Op} = require('sequelize');
const {format_url} = require('../utils');

router.param("q", (req,res,next,queryStr) => {
    let formatted = format_url(req.url);
    console.log(formatted);
    next();
});
router.get('/:q', function(req,res) {
    console.log("#### ADOPT-ROUTES\n++++++++ %s %s %s %s\n", req.method, req.path, req.params, req.query);
    // req.query
    Pets.findAll({
        where : { 
            species: req.query.species
        },
        attributes: ['id', 'pet_name', 'species','size', 'color','potty_trained','vaccinated','microchip', 'description', 'user_id']
    })
    .then(dbPetsData => {
        const pets = dbPetsData.map(pet => pet.get( {plain: true} ));
        res.render('adopt', { pets, activePets : true } );
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
);

router.get('/', function(req,res) {
    Pets.findAll({
        attributes: ['id', 'pet_name', 'species','size', 'color','potty_trained','vaccinated','microchip', 'description', 'user_id']
    })
    .then(dbPetsData => {
        const pets = dbPetsData.map(pet => pet.get( {plain: true} ));
        res.render('adopt', { pets, activePets : true } );
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
);


// router
module.exports = router;


