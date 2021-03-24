const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pets, User } = require('../models');
const {Op} = require('sequelize');
const {format_url, flattenQuery, defaultFilters} = require('../utils');

router.param('q', (req,res,next, param) => {
    console.log("#### ADOPT-ROUTES\n++++++++ %s %s %s %s\n", req.method, req.path, req.params, req.query);
    // const formatted =  req
    
    req.query.param = defaultFilters(req.query);//formatted);
    console.log(req.query.param) 
    next();
  });
router.use('/', function(req,res,next) {
       // req.query
    Pets.findAll({
        attributes: ['id', 'pet_name', 'species','size', 'color','potty_trained','vaccinated','microchip', 'description']
    }).then(dbPetsData => {
        const pets = dbPetsData.map(pet => pet.get( {plain: true} ));
        req.locals = {
            'pets': pets,
            'activePets':true}
        next();
    })


});

router.get('/', function(req,res) {
    res.status(200).render('adopt', {'pets': req.locals.pets, 'activePets': req.locals.activePets} );
});

router.get('/:q', function(req,res, next) {
    // req.query
    console.log(req.locals);
    // Pets.findAll({})
    // console.log(param);
    console.log(req.query.param);
    console.log(typeof(req.query));
    Pets.findAll({
        where : req.query.param,
        attributes: ['id', 'pet_name', 'species','size', 'color','potty_trained','vaccinated','microchip', 'description', 'user_id']
    })
    .then(dbPetsData => {
        const pets = dbPetsData.map(pet => pet.get( {plain: true} ));
        // res.location('../adopt')
        res.status(200).render('adopt', { 'pets' : pets, 'activePets' : true } );
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
);

// router
module.exports = router;


