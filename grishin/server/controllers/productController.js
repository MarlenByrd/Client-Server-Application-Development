import Product from '../models/productModel.js'

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.status(200).json(products)
  } catch (err) {
    next(err)
  }
}

export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price } = req.body

    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: 'Название и цена обязательны'
      })
    }

    const product = await Product.create({
      name,
      description,
      price
    })

    res.status(201).json(product)
  } catch (err) {
    next(err)
  }
}