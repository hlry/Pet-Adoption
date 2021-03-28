const { User } = require('../models');

const userData = [
{
    user_name:'Olivia',
    contact_number: '8047649572',
    user_id: 1,
},
{
    user_name:'Hilary',
    contact_number: '8593793769',
    user_id: 2,
},
{
    user_name:'Patrick',
    contact_number: '8701734965',
    user_id: 3,
},
{
    user_name:'Victor',
    contact_number: '7348569289',
    user_id:  4,
},
{
    user_name:'Sarah',
    contact_number: '9087369284',
    user_id:  5,
},
{
    user_name:'John',
    contact_number: '4803778942',
    user_id:  6,
},
{
    user_name:'Alex',
    contact_number: '3208904364',
    user_id:  7,
},
{
    user_name:'Tommy',
    contact_number: '9409840759',
    user_id:  8,
},
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;