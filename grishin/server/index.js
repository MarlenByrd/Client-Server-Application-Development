import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Client, sequelize } from './models/index.js'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

app.get('/clients/', async (req, res) => {
  try {
    const getAllClients = await Client.findAll()
    res.status(200).json(getAllClients)
  } 
  catch (error) {
    console.error("Ошибка при получении данных:", error)
  }
})

const start = async () => {
  try {
    await sequelize.authenticate()
    console.log('Подключение к БД успешно')

    await sequelize.sync({ alter: true })
    console.log('Синхронизация моделей успешна')

    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

start()