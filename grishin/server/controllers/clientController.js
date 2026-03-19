import Client from '../models/clientModel.js'

export const getAllClients = async (req, res, next) => {
  try {
    const clients = await Client.findAll()
    res.status(200).json(clients)
  } catch (err) {
    next(err)
  }
}

export const createClient = async (req, res, next) => {
  try {
    const { name, email, rating, bday } = req.body

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name и Email обязательны'
      })
    }

    const newClient = await Client.create({
      name,
      email,
      rating,
      bday
    })

    res.status(201).json(newClient)
  } catch (err) {
    next(err)
  }
}