import express from 'express'
import dotenv from 'dotenv'
import { sequelize } from './models/index.js'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
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
        console.error("Ошибка:", error)
        process.exit(1)
    }
}

start()