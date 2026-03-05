import { Sequelize } from '../db.js';
import { DataTypes } from 'sequelize';

export const Product = Sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,     
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0      
    }
});