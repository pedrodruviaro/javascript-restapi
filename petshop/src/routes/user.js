import { Router } from "express"
import controller from "../controllers/user.js"

const router = Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/", controller.create)
router.put("/:id", controller.update)
router.delete("/:id", controller.destroy)

export default router
