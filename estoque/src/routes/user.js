const { Router } = require("express")
const controller = require("../controllers/user")
const authMiddleware = require("../middlewares/auth")

const router = Router()

// Plain user
router.get("/info", authMiddleware(), controller.findById)
router.put("/", authMiddleware(), controller.update)
router.delete("/", authMiddleware(), controller.destroy)

// Admin
router.get("/", authMiddleware("admin"), controller.findAll)
router.get("/:id", authMiddleware("admin"), controller.findById)
router.post("/", authMiddleware("admin"), controller.create)
router.put("/:id", authMiddleware("admin"), controller.update)
router.delete("/:id", authMiddleware("admin"), controller.destroy)

module.exports = router
