import Router from "express"
import {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  updateProductStatus,
  deleteProduct
} from "../controllers/productController.js"

const router = new Router()

router.post("/", createProduct)
router.get("/", getAllProducts)
router.get("/:id", getOneProduct)
router.put("/:id", updateProduct)
router.patch("/:id", updateProductStatus)
router.delete("/:id", deleteProduct)

export default router