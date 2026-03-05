import sequelize from '../db.js'
import { DataTypes } from 'sequelize'

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  status: {
    type: DataTypes.ENUM('open', 'close', 'canceled'),
    defaultValue: 'open'
  },

  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },

  totalPrice: {
    type: DataTypes.DECIMAL,
    defaultValue: 0
  }
})

export default Order