import { Sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

export const Cart = Sequelize.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1      
    }
});