const { Router } = require("express")

const router = Router()

// Plain user
router.get("/info", () => {})
router.put("/", () => {})
router.delete("/", () => {})

// Admin
router.get("/", () => {})
router.get("/:id", () => {})
router.post("/", () => {})
router.put("/:id", () => {})
router.delete("/:id", () => {})

module.exports = router
