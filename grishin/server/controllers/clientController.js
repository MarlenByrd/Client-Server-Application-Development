import Client from "../models/clientModel.js"

//HTTP-GETALL метод
export const getAllClients = async (req, res, next) => {
  try {
    const clients = await Client.findAll()
    res.status(200).json(clients)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-GETONE метод
export const getOneClient = async (req, res, next) => {
  try{
    const { id } = req.params

    const oneclient = await Client.findOne({
      where: { id }
    })

    if (oneclient === null ) {
      res.status(404).json({message: 'Пользоватль с таким ID не найден'})
    } else {
      res.status(200).json(oneclient)
    }
  }
  catch (err) {
    next(err)
  }
}

//HTTP-POST метод
export const createClient = async (req, res, next) => {
  try {
    const client = await Client.create(req.body)
    res.status(200).json(client)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-PUT метод
export const updateClient = async (req, res, next) => {
  try {
    const { id } = req.params

    const [updated] = await Client.update(req.body, { where: { id } })

    if (!updated) return res.status(404).json({message: 'Клиент не найден'})

    const client = await Client.findOne({
      where: { id }
    })

    res.status(200).json(client)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-PATCH метод
export const updateClientStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rating } = req.body

    const newRating = await Client.findOne({
      where: { id }
    })

    if (!newRating) return res.status(404).json({ message: "Клиент не найден"})

    newRating.rating = rating
    await newRating.save()

    res.status(200).json(newRating)
  }
  catch (err) {
    next(err)
  }
}

//HTTP-DELETE метод
export const deleteClient = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Client.destroy({
      where: { id }
    })

    if (!deleted) {
      res.status(404).json({ message: "Клиент не найден" })
    } else {
      res.status(200).json({ message: "Клиент удален" })
    }
  }
  catch (err) {
    next(err)
  }
}