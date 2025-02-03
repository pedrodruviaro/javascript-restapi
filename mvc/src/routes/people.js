import express from "express"
import { ControllerPeople } from "../controllers/people.js"

const router = express.Router()

const controller = new ControllerPeople()

router.get("/people", controller.getAll)
router.get("/people/:index", controller.getOne)
router.post("/people/", controller.addOne)
router.put("/people/:index", controller.updateOne)
router.delete("/people/:index", controller.deleteOne)

export default router
