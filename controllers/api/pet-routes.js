
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Op } = require("sequelize");
const { Pets, Users } = require('../../models');
const { format_url, flattenQuery } = require('../../utils');

const createNewPet = async (data) => {
    return await Pets.create(data)
}

const postPet = async (req, res) => {   
    try {
        req.body.user_id = 1 // placeholder
        const petData = flattenQuery(req.body);
        await createNewPet(petData);
        res.status(200).json(petData);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
}

const renderPets = async function (data, res) {
    console.log(data);
    res.render('adopt', data);
}

const queryPets = async function (req,res)    {
    // let data;
    let petData;
    let data;
    const filt = req.query;
    if ( !(filt.species || null)) {
        filt.species = ['cat', 'dog']
    }
    try { 
        petData = await Pets.findAll({ where: {species: filt.species}, attributes: ['id', 'pet_name', 'species','size', 'color','potty_trained','vaccinated','microchip', 'description']});
        res.json(petData);
    } catch (err) {
        console.log(err);
        throw(err);
  
    }
    // data = {
    //     pets: petData,
    //     activePets: true
    // }
    // return renderPets(data,res);
};
// router.get('/q', queryPets);
router.get('/', (req,res,next) => {
    Pets.findAll({
        attributes: ['id', 'pet_name', 'species','size', 'color','potty_trained','vaccinated','microchip', 'description', 'user_id']
    })
    .then(all_dbPetsData => {
        if (!all_dbPetsData) {
            res.status(200).json({ activePets: false, pets: {}, message: 'No Pets In Database!' });
        } else {
            res.json(all_dbPetsData) ;
            next();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/:q', (req, res) => {
    Pets.findAll({
        where: req.query.param ,
        // where: {species: [req.params.q.species]},
        attributes: ['id', 'pet_name', 'species','size', 'color','potty_trained','vaccinated','microchip', 'description', 'user_id']
    })
    .then(dbPetsData => {
        if (!dbPetsData) {
            res.status(404).json({ activePets: false, pets: {}, message: 'No Pets Found' });
            return;
        }
        res.json(dbPetsData) ;//'adopt', {pets: dbPetsData, activePets: true} );
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
      });
});
router.post('/',  postPet);
// );
// router.get('/adopt', (req, res) => { 
//     // ---- TO DO ----------
//     Pets.findAll({
//         attributes: ['id', 'pet_name', 'species','size', 'color','potty_trained','vaccinated','microchip', 'description', 'user_id']
//     })
//     .then(dbPetsData => {
//         if (!dbPetsData) {
//             res.status(404).json({ message: 'No Pets Found' });
//             return;
//         }
//         res.json(dbPetsData);
//     })
//     .catch( err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
// });
// router.get 
module.exports = router;// //, renderPets, findPets}