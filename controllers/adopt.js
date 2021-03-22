const { Pets, User } = require('../models');
// const sequelize = require('../config/connection');
const { flattenQuery } = require('../utils');

const getPets = async (req, res, next) => {
    // ---- TO DO ----------
    console.log(JSON.stringify(req.query,null,2));
    // res.send('GET PETS');
};

module.exports = {getPets}
