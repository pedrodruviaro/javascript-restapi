const { Router } = require("express")
const controller = require("../controllers/user")

const router = Router()

// Plain user
router.get("/info", controller.findById)
router.put("/", controller.update)
router.delete("/", controller.destroy)

// Admin
router.get("/", controller.findAll)
router.get("/:id", controller.findById)
router.post("/", controller.create)
router.put("/:id", controller.update)
router.delete("/:id", controller.destroy)

module.exports = router
