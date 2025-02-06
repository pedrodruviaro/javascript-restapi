const InventoryMovement = require("../models/inventoryMovement")
const Product = require("../models/product")

const MOVEMENT_TYPES = ["out", "in"]

class InventoryMovementServices {
  async findById(inventoryId, id, transaction) {
    return InventoryMovement.findOne(
      { where: { inventoryId, id } },
      { transaction }
    )
  }

  async findAll(inventoryId, transaction) {
    return InventoryMovement.findAll(
      { where: { inventoryId }, include: { model: Product } },
      { transaction }
    )
  }

  async create(inventoryId, userId, type, amount, productId, transaction) {
    if (!inventoryId) {
      throw new Error("InventoryId is required")
    } else if (!userId) {
      throw new Error("UserId is required")
    } else if (!type || !MOVEMENT_TYPES.includes(type)) {
      throw new Error("Type is required")
    } else if (!amount) {
      throw new Error("Amount is required")
    } else if (!productId) {
      throw new Error("ProductId is required")
    }

    return InventoryMovement.create(
      { inventoryId, userId, type, amount, productId },
      { transaction }
    )
  }

  async update(inventoryId, id, type, amount) {
    if (!inventoryId) {
      throw new Error("InventoryId is required")
    } else if (!userId) {
      throw new Error("UserId is required")
    } else if (type && !MOVEMENT_TYPES.includes(type)) {
      throw new Error("Type is required")
    }

    const oldInventoryMovement = await this.findById(
      inventoryId,
      id,
      transaction
    )

    if (!oldInventoryMovement) {
      throw new Error("Inventory Movement not found")
    }

    oldInventoryMovement.type = type || oldInventoryMovement.type
    oldInventoryMovement.amount = amount || oldInventoryMovement.amount

    return oldInventoryMovement.save({ transaction })
  }

  async destroy(inventoryId, id, transaction) {
    const inventoryMovementToDelete = await this.findById(
      inventoryId,
      id,
      transaction
    )

    if (!inventoryMovementToDelete) {
      throw new Error("Inventory Movement not found")
    }

    return inventoryMovementToDelete.destroy({ transaction })
  }
}

module.exports = new InventoryMovementServices()
