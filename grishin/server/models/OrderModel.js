import { Sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

export const Order = Sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.ENUM('open', 'closed', 'pending', 'cancelled'), 
        allowNull: false,
        defaultValue: 'open' 
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW 
    },
    totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0      
    },
});