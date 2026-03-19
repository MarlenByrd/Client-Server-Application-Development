import { Router } from 'express'
import {
  getAllOrders,
  createOrder,
  addProductToOrder
} from '../controllers/orderController.js'

const router = new Router()

router.get('/', getAllOrders)
router.post('/', createOrder)
router.post('/add-product', addProductToOrder)

export default router