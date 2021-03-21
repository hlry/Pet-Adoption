const router = require('express').Router();

const { Pets, User } = require('../../models');
const sequelize = require('../../config/connection');

// api/share endpoint

router.post('/', (req, res) => {
    console.log(req.body)
    
    Pets.create(
        {
            id : req.body.id,
            pet_name : req.body.pet_name,
            color : req.body.color,
            species : req.body.species,
            size : req.body.size,
            age : req.body.age,
            potty_trained : req.body.potty_trained,
            vaccinated : req.body.vaccinated,
            microchip :  req.body.microchip
        }
    )
   .then(createData => res.json(createData))
   .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

    Pets.create(req.body)
    .then((pet) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
    //   if (req.session.firstTime) {
    //     const productTagIdArr = req.body.tagIds.map((tag_id) => {
    //       return {
    //         product_id: product.id,
    //         tag_id,
    //       };
    //     });
    //     return ProductTag.bulkCreate(productTagIdArr);
    //   }
      // if no product tags, just respond
      res.status(200).json(pet);
    })
    // .then((productTagIds) => res.status(200).json(productTagIds))
    // .catch((err) => {
    //   console.log(err);
    //   res.status(400).json(err);
    // });
})
  
module.exports = router;
