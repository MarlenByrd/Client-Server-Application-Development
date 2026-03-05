import { sequelize } from './models/index.js'
import Cart from './cartModel.js'
import Client from './clientModel.js'
import Order from './orderModel.js'
import Product from './productModel.js'

Client.hasMany(Order)
Order.belongsTo(Client)

Product.belongsToMany(Order, { through: Cart })
Order.belongsToMany(Product, { through: Cart })

export { sequelize, Cart, Client, Order, Product }