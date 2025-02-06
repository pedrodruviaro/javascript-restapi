const productServices = require("../services/product")

class ProductController {
  async findById(req, res) {
    try {
      const { id } = req.params
      const organizationId = 1
      const product = await productServices.findById(organizationId, id)

      res.status(200).json({ product })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async findAll(req, res) {
    try {
      const organizationId = 1
      const products = await productServices.findAll(organizationId)

      res.status(200).json({ products })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async create(req, res) {
    try {
      const organizationId = 1
      const { name, description } = req.body
      const product = await productServices.create(
        organizationId,
        name,
        description
      )

      res.status(200).json({ product })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async update(req, res) {
    try {
      const organizationId = 1
      const { id } = req.params
      const { name, description } = req.body

      const product = await productServices.update(
        organizationId,
        id,
        name,
        description
      )

      res.status(200).json({ product })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async destroy(req, res) {
    try {
      const organizationId = 1
      const { id } = req.params
      const product = await productServices.destroy(organizationId, id)

      res.status(204).json({ product })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }
}

module.exports = new ProductController()
