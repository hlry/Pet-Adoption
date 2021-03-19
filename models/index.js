// import models
const Pets = require('./Pets');
const User = require('./Users');

//Associations
Pets.belongsTo(User,{
    foreignKey: 'user_id'
});

User.hasMandy(Pets,{
    foreinKey: 'pet_id'
});

model.exports={
    Pets,
    User
};