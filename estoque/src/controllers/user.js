const userServices = require("../services/user")

class UserController {
  async findAll(req, res) {
    try {
      const organizationId = 1

      const users = await userServices.findAll(organizationId)

      res.status(200).json({ users })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async findById(req, res) {
    try {
      const organizationId = 1
      const { id } = req.params

      const user = await userServices.findById(organizationId, id)

      res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async create(req, res) {
    try {
      const organizationId = 1
      const { name, email, password, role } = req.body

      const user = await userServices.create(
        organizationId,
        name,
        email,
        password,
        role
      )

      res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async update(req, res) {
    try {
      const organizationId = 1
      const { id } = req.params
      const { name, email, password, role } = req.body

      const user = await userServices.update(
        organizationId,
        id,
        name,
        email,
        password,
        role
      )

      res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async destroy(req, res) {
    try {
      const organizationId = 1
      const { id } = req.params

      const user = await userServices.destroy(organizationId, id)

      res.status(204).json({ user })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }
}

module.exports = new UserController()
