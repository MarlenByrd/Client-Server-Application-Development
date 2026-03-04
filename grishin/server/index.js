import express from 'express' //создание экземпляра express из внешнего express
import 'dotenv/config'
import { sequelize } from './db.js'

//переменные сервера (приложение сервера app) + порт сервера
const app = express()
const port = process.env.PORT

const startServer = async () => {
  try {
    app.listen(port, () => console.log(`Сервер работает http://localhost:${port}`))
    await sequelize.authenticate();//подключает сервер к БД через sequelize (db.js)
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

//Запуск сервера
startServer()
