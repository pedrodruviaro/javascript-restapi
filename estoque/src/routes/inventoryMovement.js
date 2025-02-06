const { Router } = require("express")
const controller = require("../controllers/inventoryMovement")

const router = Router()

router.get("/:inventoryId", controller.findAll)
router.get("/:inventoryId/:id", controller.findById)
router.post("/:inventoryId", controller.create)
router.put("/:inventoryId/:id", controller.update)
router.delete("/:inventoryId/:id", controller.destroy)

module.exports = router
