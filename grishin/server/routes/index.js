import Router from "express"

import clientRouter from "./clientRouter.js"
import productRouter from "./productRouter.js"
import orderRouter from "./orderRouter.js"
import cartRouter from "./cartRouter.js"

const router = new Router()

router.use("/client", clientRouter)
router.use("/product", productRouter)
router.use("/order", orderRouter)
router.use("/cart", cartRouter)

export default router