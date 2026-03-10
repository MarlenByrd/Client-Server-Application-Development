import sequelize from '../db.js'
import { DataTypes } from 'sequelize'

const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  bday: {
    type: DataTypes.DATE
  }
}, {
  timestamps: false
})

export default Client