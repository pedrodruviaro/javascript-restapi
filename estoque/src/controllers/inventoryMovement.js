const InventoryMovement = require("../models/inventoryMovement")

class InventoryMovementController {
  async findById(req, res) {
    try {
      const { id } = req.params
      const inventoryMovement = {}

      res.status(200).json({ inventoryMovement })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async findAll(req, res) {
    try {
      const inventoryMovements = {}

      res.status(200).json({ inventoryMovements })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async create(req, res) {
    try {
      const { id } = req.params
      const inventoryMovement = {}

      res.status(200).json({ inventoryMovement })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const inventoryMovement = {}

      res.status(200).json({ inventoryMovement })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params
      const inventoryMovement = {}

      res.status(200).json({ inventoryMovement })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }
}

module.exports = new InventoryMovementController()
