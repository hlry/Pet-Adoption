const { Pets, User } = require('../models');
const sequelize = require('../config/connection');
const { flattenQuery } = require('../utils');

const getPets = async (req, res, next) => {
    console.log(req)
    res.send('GET PETS');
};

module.exports = {getPets}
