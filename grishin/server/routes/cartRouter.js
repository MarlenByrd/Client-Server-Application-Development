import Router from "express"
import {
  getAllCarts,
  getOneCart,
  createCart,
  updateCart,
  updateCartStatus,
  deleteCart
} from "../controllers/cartController.js"

const router = new Router()

router.post("/", createCart)
router.get("/", getAllCarts)
router.get("/:id", getOneCart)
router.put("/:id", updateCart)
router.patch("/:id", updateCartStatus)
router.delete("/:id", deleteCart)

export default router