import { Router } from "express"
import dog from "../models/dog.js"
import user from "../models/user.js"

const router = Router()

router.get("/", async (req, res) => {
  const dogs = await dog.findAll()
  return res.status(200).json({ dogs })
})

router.get("/:id", async (req, res) => {
  const foundDog = await dog.findByPk(req.params.id, { include: user })
  return res.status(200).json({ dog: foundDog })
})

router.post("/", async (req, res) => {
  try {
    const createdDog = await dog.create(req.body)
    return res.status(201).json({ dog: createdDog })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
