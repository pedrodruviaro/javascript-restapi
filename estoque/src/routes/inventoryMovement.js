const { Router } = require("express")
const controller = require("../controllers/inventoryMovement")
const authMiddleware = require("../middlewares/auth")

const router = Router()

router.get("/:inventoryId", authMiddleware(), controller.findAll)
router.get("/:inventoryId/:id", authMiddleware(), controller.findById)
router.post("/:inventoryId", authMiddleware(), controller.create)
router.put("/:inventoryId/:id", authMiddleware(), controller.update)
router.delete("/:inventoryId/:id", authMiddleware(), controller.destroy)

module.exports = router
