const { Router } = require("express")
const controller = require("../controllers/inventoryMovement")

const router = Router()

router.get("/", controller.findAll)
router.get("/:id", controller.findById)
router.post("/", controller.create)
router.put("/:id", controller.update)
router.delete("/:id", controller.destroy)

module.exports = router
