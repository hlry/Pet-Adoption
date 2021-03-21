const { Pets, User } = require('../models');
const sequelize = require('../config/connection');
const { flattenQuery } = require('../utils');

const createNewPet = async (data) => {
    return await Pets.create(data)
}

const postPet = async (req, res,next ) => {   
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

module.exports = {postPet};