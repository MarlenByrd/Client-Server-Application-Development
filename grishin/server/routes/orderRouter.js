import Router from "express"
import {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  updateOrderStatus,
  deleteOrder
} from "../controllers/orderController.js"

const router = new Router()

router.post("/", createOrder)
router.get("/", getAllOrders)
router.get("/:id", getOneOrder)
router.put("/:id", updateOrder)
router.patch("/:id", updateOrderStatus)
router.delete("/:id", deleteOrder)

export default router