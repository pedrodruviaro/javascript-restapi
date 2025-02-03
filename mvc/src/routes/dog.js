import { Router } from "express"
import { DogController } from "../controllers/dog.js"

const router = Router()
const controller = new DogController()

router.get("/dogs", controller.getAll)
router.get("/dogs/:index", controller.getOne)
router.post("/dogs", controller.createOne)
router.put("/dogs/:index", controller.updateOne)
router.delete("/dogs/:index", controller.deleteOne)

export default router
