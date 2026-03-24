import Cart from "../models/cartModel.js"

//HTTP-GETALL метод
export const getAllCarts = async (req, res, next) => {
  try {
    const carts = await Cart.findAll()
    res.status(200).json(carts)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-GETONE метод
export const getOneCart = async (req, res, next) => {
  try{
    const { id } = req.params

    const onecart = await Cart.findOne({
      where: { id }
    })

    if (onecart === null ) {
      res.status(404).json({message: 'Корзина не найдена'})
    } else {
      res.status(200).json(onecart)
    }
  }
  catch (err) {
    next(err)
  }
}

//HTTP-POST метод
export const createCart = async (req, res, next) => {
  try {
    const cart = await Cart.create(req.body)
    res.status(200).json(cart)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-PUT метод
export const updateCart = async (req, res, next) => {
  try {
    const { id } = req.params

    const [updated] = await Cart.update(req.body, { where: { id } })

    if (!updated) return res.status(404).json({message: 'Корзина не найдена'})

    const cart = await Cart.findOne({
      where: { id }
    })

    res.status(200).json(cart)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-PATCH метод
export const updateCartStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { quantity } = req.body

    const newCart = await Cart.findOne({
      where: { id }
    })

    if (!newCart) return res.status(404).json({ message: "Корзина не найдена"})

    newCart.quantity = quantity
    await newCart.save()

    res.status(200).json(newCart)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-DELETE метод
export const deleteCart = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Cart.destroy({
      where: { id }
    })

    if (!deleted) {
      res.status(404).json({ message: "Корзина не найдена" })
    } else {
      res.status(200).json({ message: "Корзина удалена" })
    }
  }
  catch (err) {
    next(err)
  }
}