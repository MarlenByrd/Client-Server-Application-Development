import Product from "../models/productModel.js"

//HTTP-GETALL метод
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.status(200).json(products)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-GETONE метод
export const getOneProduct = async (req, res, next) => {
  try{
    const { id } = req.params

    const oneproduct = await Product.findOne({
      where: { id }
    })

    if (oneproduct === null ) {
      res.status(404).json({message: 'Товар не найден'})
    } else {
      res.status(200).json(oneproduct)
    }
  }
  catch (err) {
    next(err)
  }
}

//HTTP-POST метод
export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-PUT метод
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params

    const [updated] = await Product.update(req.body, { where: { id } })

    if (!updated) return res.status(404).json({message: 'Товар не найден'})

    const product = await Product.findOne({
      where: { id }
    })

    res.status(200).json(product)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-PATCH метод
export const updateProductStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { price } = req.body

    const newProduct = await Product.findOne({
      where: { id }
    })

    if (!newProduct) return res.status(404).json({ message: "Товар не найден"})

    newProduct.price = price
    await newProduct.save()

    res.status(200).json(newProduct)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-DELETE метод
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Product.destroy({
      where: { id }
    })

    if (!deleted) {
      res.status(404).json({ message: "Товар не найден" })
    } else {
      res.status(200).json({ message: "Товар удален" })
    }
  }
  catch (err) {
    next(err)
  }
}