const { User } = require('../models');

const userData = [
{
    user_name:'Olivia',
    contact_numer: 8047649572,
    pet_id: 1,
},
{
    user_name:'Hilary',
    contact_numer: 8593793769,
    pet_id: 2,
},
{
    user_name:'Patrick',
    contact_numer: 8701734965,
    pet_id: 3,
},
{
    user_name:'Victor',
    contact_numer: 7348569289,
    pet_id: 4,
},
{
    user_name:'Sarah',
    contact_numer: 9087369284,
    pet_id: 5,
},
{
    user_name:'John',
    contact_numer: 4803778942,
    pet_id: 6,
},
{
    user_name:'Alex',
    contact_numer: 3208904364,
    pet_id: 7,
},
{
    user_name:'Tommy',
    contact_numer: 9409840759,
    pet_id: 8,
},
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;