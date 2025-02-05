const Product = require("../models/product")

class ProductController {
  async findById(req, res) {
    try {
      const { id } = req.params
      const product = {}

      res.status(200).json({ product })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async findAll(req, res) {
    try {
      const products = {}

      res.status(200).json({ products })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async create(req, res) {
    try {
      const { id } = req.params
      const product = {}

      res.status(200).json({ product })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const product = {}

      res.status(200).json({ product })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params
      const product = {}

      res.status(200).json({ product })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }
}

module.exports = new ProductController()
