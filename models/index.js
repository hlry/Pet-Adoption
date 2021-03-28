// import models
const Pets = require('./pets');
const User = require('./users');

//Associations
Pets.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Pets, {
    foreignKey: 'pet_id'
});

module.exports = {
    Pets,
    User
};