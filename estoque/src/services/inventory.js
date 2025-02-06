const Inventory = require("../models/inventory")
const inventoryMovementServices = require("./inventoryMovement")
const getProductMovements = require("../utils/getProductMovements")

class InventoryServices {
  async findById(organizationId, id, transaction) {
    const inventory = await Inventory.findOne(
      { where: { organizationId, id } },
      { transaction }
    )

    if (!inventory) throw new Error("Inventory not found")

    const movements = await inventoryMovementServices.findAll(inventory.id)

    const formatedMovements = getProductMovements(movements)

    return {
      ...inventory.dataValues,
      ...formatedMovements,
    }
  }

  async findAll(organizationId, transaction) {
    return Inventory.findAll({ where: { organizationId } }, { transaction })
  }

  async create(organizationId, name, transaction) {
    if (!organizationId) {
      throw new Error("Organization ID is required")
    } else if (!name) {
      throw new Error("Name is required")
    }

    return Inventory.create({ organizationId, name }, { transaction })
  }

  async update(organizationId, id, name, transaction) {
    if (!organizationId) {
      throw new Error("Organization ID is required")
    }

    const oldInventory = await this.findById(organizationId, id, transaction)

    if (!oldInventory) {
      throw new Error("Inventory not found")
    }

    oldInventory.name = name || oldInventory.name

    return oldInventory.save({ transaction })
  }

  async destroy(organizationId, id, transaction) {
    if (!organizationId) {
      throw new Error("Organization ID is required")
    }

    const inventoryToDelete = await this.findById(
      organizationId,
      id,
      transaction
    )

    if (!inventoryToDelete) {
      throw new Error("Inventory not found")
    }

    return inventoryToDelete.destroy({ transaction })
  }
}

module.exports = new InventoryServices()
