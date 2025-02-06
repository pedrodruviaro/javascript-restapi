const Product = require("../models/product")

class ProductServices {
  async findById(organizationId, id, transaction) {
    return Product.findOne({ where: { organizationId, id } }, { transaction })
  }

  async findAll(organizationId, transaction) {
    return Product.findAll({ where: { organizationId } }, { transaction })
  }

  async create(organizationId, name, description, transaction) {
    if (!organizationId) {
      throw new Error("Organization ID is required")
    } else if (!name) {
      throw new Error("Name is required")
    } else if (!description) {
      throw new Error("Description is required")
    }

    return Product.create(
      { organizationId, name, description },
      {
        transaction,
      }
    )
  }

  async update(organizationId, id, name, description, transaction) {
    if (!organizationId) {
      throw new Error("Organization ID is required")
    }

    const oldProduct = await this.findById(organizationId, id, transaction)

    if (!oldProduct) throw new Error("Product not found")

    oldProduct.name = name || oldProduct.name
    oldProduct.description = description || oldProduct.description

    return oldProduct.save({ transaction })
  }

  async destroy(organizationId, id, transaction) {
    if (!organizationId) {
      throw new Error("Organization ID is required")
    }

    const productToDelete = await this.findById(organizationId, id, transaction)

    if (!productToDelete) throw new Error("Product not found")

    await productToDelete.destroy({ transaction })
  }
}

module.exports = new ProductServices()
