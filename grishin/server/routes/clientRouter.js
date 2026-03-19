import { Router } from 'express'
import { getAllClients, createClient } from '../controllers/clientController.js'

const router = new Router()

router.get('/', getAllClients)
router.post('/', createClient)

export default router