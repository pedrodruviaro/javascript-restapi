const { Router } = require("express")
const controller = require("../controllers/organization")
const authMiddleware = require("../middlewares/auth")

const router = Router()

router.get("/:id", authMiddleware("admin"), controller.findById)
router.post("/", authMiddleware("admin"), controller.create)
router.put("/:id", authMiddleware("admin"), controller.update)
router.delete("/:id", authMiddleware("admin"), controller.destroy)

module.exports = router
