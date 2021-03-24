
const router = require('express').Router();
const { Pets, User } = require('../models');
const sequelize = require('../config/connection');
const { flattenQuery } = require('../utils');


router.get('/', function( req, res) {
    res.render('share');
  });
  
// router.post('/', function( req, res) {
//     // res.render('share');
//     // res.json(req.body);
//     postPet(req,res);
//     //res.('share');
//   });

module.exports = router;