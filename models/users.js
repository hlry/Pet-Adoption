// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class User extends Model {}

// set up fields and rules for Product model
User.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
      },
      user_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact_numer:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pet_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references:{
          model: 'pets',
          key: 'id'
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  });

  module.exports = User;