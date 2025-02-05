const Organization = require("../models/organization")

class OrganizationController {
  async findById(req, res) {
    try {
      const { id } = req.params
      const organization = {}

      res.status(200).json({ organization })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async create(req, res) {
    try {
      const { id } = req.params
      const organization = {}

      res.status(200).json({ organization })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const organization = {}

      res.status(200).json({ organization })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params
      const organization = {}

      res.status(200).json({ organization })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }
}

module.exports = new OrganizationController()
