import services from "../services/user.js"

class UserController {
  async getAll(req, res) {
    try {
      const users = await services.getAll()

      return res.status(200).json({ users })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params
      const user = await services.getById(id)

      return res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async create(req, res) {
    try {
      const { name, email, password } = req.body
      const user = await services.create(name, email, password)

      return res.status(201).json({ user })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const { name, email, password } = req.body
      const updatedUser = await services.update(id, name, email, password)

      return res.status(200).json({ user: updatedUser })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params
      await services.destroy(id)

      res.status(204).send({ ok: true })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}

export default new UserController()
