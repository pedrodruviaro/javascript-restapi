const User = require("../models/user")

class UserController {
  async findById(req, res) {
    try {
      const { id } = req.params
      const user = {}

      res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async findAll(req, res) {
    try {
      const users = {}

      res.status(200).json({ users })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async create(req, res) {
    try {
      const { id } = req.params
      const user = {}

      res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const user = {}

      res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params
      const user = {}

      res.status(200).json({ user })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }
}

module.exports = new UserController()
