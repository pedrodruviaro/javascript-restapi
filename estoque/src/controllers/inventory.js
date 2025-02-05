const Inventory = require("../models/inventory")

class InventoryController {
  async findById(req, res) {
    try {
      const { id } = req.params
      const inventory = {}

      res.status(200).json({ inventory })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async findAll(req, res) {
    try {
      const inventories = {}

      res.status(200).json({ inventories })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async create(req, res) {
    try {
      const { id } = req.params
      const inventory = {}

      res.status(200).json({ inventory })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const inventory = {}

      res.status(200).json({ inventory })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params
      const inventory = {}

      res.status(200).json({ inventory })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }
}

module.exports = new InventoryController()
