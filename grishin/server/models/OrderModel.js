import sequelize from '../db.js'
import { DataTypes } from 'sequelize'

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: DataTypes.ENUM('open', 'closed', 'canceled'),
    defaultValue: 'open'
  },
  date: {
    type: DataTypes.DATE
  },
  totalPrice: {
    type: DataTypes.DECIMAL
  }
})

export default Order