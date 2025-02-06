const inventoryMovementServices = require("../services/inventoryMovement")

class InventoryMovementController {
  async findById(req, res) {
    try {
      const { id, inventoryId } = req.params
      const inventoryMovement = await inventoryMovementServices.findById(
        inventoryId,
        id
      )

      res.status(200).json({ inventoryMovement })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async findAll(req, res) {
    try {
      const { inventoryId } = req.params
      const inventoryMovements = await inventoryMovementServices.findAll(
        inventoryId
      )

      res.status(200).json({ inventoryMovements })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async create(req, res) {
    try {
      const userId = 5
      const { inventoryId } = req.params
      const { type, amount, productId } = req.body
      const inventoryMovement = await inventoryMovementServices.create(
        inventoryId,
        userId,
        type,
        amount,
        productId
      )

      res.status(200).json({ inventoryMovement })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async update(req, res) {
    try {
      const { id, inventoryId } = req.params
      const { type, amount } = req.body
      const inventoryMovement = await inventoryMovementServices.update(
        inventoryId,
        id,
        type,
        amount
      )

      res.status(200).json({ inventoryMovement })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async destroy(req, res) {
    try {
      const { id, inventoryId } = req.params
      await inventoryMovementServices.destroy(inventoryId, id)

      res.status(204)
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }
}

module.exports = new InventoryMovementController()
