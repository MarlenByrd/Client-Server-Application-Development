import Router from "express"
import {
  getAllClients,
  getOneClient,
  createClient,
  updateClient,
  updateClientStatus,
  deleteClient
} from "../controllers/clientController.js"

const router = new Router()

router.post("/", createClient)
router.get("/", getAllClients)
router.get("/:id", getOneClient)
router.put("/:id", updateClient)
router.patch("/:id", updateClientStatus)
router.delete("/:id", deleteClient)

export default router