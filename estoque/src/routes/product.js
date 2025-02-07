const { Router } = require("express")
const controller = require("../controllers/product")
const authMiddleware = require("../middlewares/auth")

const router = Router()

router.get("/", authMiddleware(), controller.findAll)
router.get("/:id", authMiddleware(), controller.findById)
router.post("/", authMiddleware(), controller.create)
router.put("/:id", authMiddleware(), controller.update)
router.delete("/:id", authMiddleware(), controller.destroy)

module.exports = router
