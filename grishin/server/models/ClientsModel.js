import { Sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

const Client = Sequelize.define(
  'client',
  {
    // model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Rating: {
      type: DataTypes.DECIMAL(0),
      allowNull: false,
    },
    bday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    // other model options go here
  }
);

// Sequelize.define also returns the model
console.log(Client === Sequelize.models.Client); // true
