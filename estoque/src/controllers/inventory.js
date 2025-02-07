const inventoryServices = require("../services/inventory")

class InventoryController {
  async findById(req, res) {
    try {
      const { organizationId } = req.session
      const { id } = req.params
      const inventory = await inventoryServices.findById(organizationId, id)

      res.status(200).json({ inventory })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async findAll(req, res) {
    try {
      const { organizationId } = req.session
      const inventories = await inventoryServices.findAll(organizationId)

      res.status(200).json({ inventories })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async create(req, res) {
    try {
      const { organizationId } = req.session
      const { name } = req.body
      const inventory = await inventoryServices.create(organizationId, name)

      res.status(200).json({ inventory })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async update(req, res) {
    try {
      const { organizationId } = req.session
      const { id } = req.params
      const { name } = req.body
      const inventory = await inventoryServices.update(organizationId, id, name)

      res.status(200).json({ inventory })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async destroy(req, res) {
    try {
      const { organizationId } = req.session
      const { id } = req.params
      const inventory = await inventoryServices.destroy(organizationId, id)

      res.status(204).json({ inventory })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }
}

module.exports = new InventoryController()
