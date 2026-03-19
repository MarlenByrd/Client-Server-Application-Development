import Order from '../models/orderModel.js'
import Product from '../models/productModel.js'
import Client from '../models/clientModel.js'

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [Client, Product]
    })

    res.status(200).json(orders)
  } catch (err) {
    next(err)
  }
}

export const createOrder = async (req, res, next) => {
  try {
    const { ClientId, status, totalPrice } = req.body

    if (!ClientId) {
      return res.status(400).json({
        success: false,
        message: 'ClientId обязателен'
      })
    }

    const order = await Order.create({
      ClientId,
      status,
      totalPrice
    })

    res.status(201).json(order)
  } catch (err) {
    next(err)
  }
}

export const addProductToOrder = async (req, res, next) => {
  try {
    const { orderId, productId, quantity } = req.body

    if (!orderId || !productId) {
      return res.status(400).json({
        success: false,
        message: 'orderId и productId обязательны'
      })
    }

    const order = await Order.findByPk(orderId)
    const product = await Product.findByPk(productId)

    if (!order || !product) {
      return res.status(404).json({
        success: false,
        message: 'Заказ или продукт не найден'
      })
    }

    await order.addProduct(product, {
      through: { quantity: quantity || 1 }
    })

    res.status(200).json({ message: 'Товар добавлен в заказ' })
  } catch (err) {
    next(err)
  }
}