// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js

const sequelize = require('../config/connection');

// Initialize Pets model (table) by extending off Sequelize's Model class
class Pets extends Model {}

Pets.init({
    id:{
    type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    pet_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    color:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    species:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    size:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    potty_trained:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    vaccinated:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false

    },
    microchip:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false

    },
    description:{
        type: DataTypes.STRING,
        allowNull: false

    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model: 'user',
          key: 'id'
        }
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pets',
      }

);

module.exports= Pets;
