const { Router } = require("express")
const controller = require("../controllers/organization")

const router = Router()

router.get("/:id", controller.findById)
router.post("/", controller.create)
router.put("/:id", controller.update)
router.delete("/:id", controller.update)

module.exports = router
