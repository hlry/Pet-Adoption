// import models
const Pets = require('./Pets');
const User = require('./Users');

//Associations
Pets.belongsTo(User,{
    foreignKey: 'user_id'
});

User.hasMany(Pets,{
    foreignKey: 'pet_id'
});

module.exports = {
    Pets,
    User
    };