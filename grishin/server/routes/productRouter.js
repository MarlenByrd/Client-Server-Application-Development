import { Router } from 'express'
import { getAllProducts, createProduct } from '../controllers/productController.js'

const router = new Router()

router.get('/', getAllProducts)
router.post('/', createProduct)

export default router