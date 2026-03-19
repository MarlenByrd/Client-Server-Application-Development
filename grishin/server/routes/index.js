import { Router } from 'express'

import clientRouter from './clientRouter.js'
import productRouter from './productRouter.js'
import orderRouter from './orderRouter.js'

const router = new Router()

router.use('/clients', clientRouter)
router.use('/products', productRouter)
router.use('/orders', orderRouter)

export default router