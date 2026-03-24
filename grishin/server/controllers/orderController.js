import Order from "../models/orderModel.js"

//HTTP-GETALL метод
export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.status(200).json(orders)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-GETONE метод
export const getOneOrder = async (req, res, next) => {
  try{
    const { id } = req.params

    const oneorder = await Order.findOne({
      where: { id }
    })

    if (oneorder === null ) {
      res.status(404).json({message: 'Заказ не найден'})
    } else {
      res.status(200).json(oneorder)
    }
  }
  catch (err) {
    next(err)
  }
}

//HTTP-POST метод
export const createOrder = async (req, res, next) => {
  try {
    const order = await Order.create(req.body)
    res.status(200).json(order)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-PUT метод
export const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params

    const [updated] = await Order.update(req.body, { where: { id } })

    if (!updated) return res.status(404).json({message: 'Заказ не найден'})

    const order = await Order.findOne({
      where: { id }
    })

    res.status(200).json(order)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-PATCH метод
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { status } = req.body

    const newOrder = await Order.findOne({
      where: { id }
    })

    if (!newOrder) return res.status(404).json({ message: "Заказ не найден"})

    newOrder.status = status
    await newOrder.save()

    res.status(200).json(newOrder)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-DELETE метод
export const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Order.destroy({
      where: { id }
    })

    if (!deleted) {
      res.status(404).json({ message: "Заказ не найден" })
    } else {
      res.status(200).json({ message: "Заказ удален" })
    }
  }
  catch (err) {
    next(err)
  }
}