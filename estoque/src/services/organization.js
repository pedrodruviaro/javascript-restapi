const Organization = require("../models/organization")
const userServices = require("../services/user")
const generateRandomPassword = require("../utils/generateRandomPassword")

class OrganizationServices {
  async findById(id, transaction) {
    return Organization.findByPk(id, { transaction })
  }

  async create(name, address, phone, email, transaction) {
    if (!name) {
      throw new Error("Name is required")
    } else if (!address) {
      throw new Error("Address is required")
    } else if (!phone) {
      throw new Error("Phone is required")
    } else if (!email) {
      throw new Error("Email is required")
    }

    const password = generateRandomPassword()

    const organization = await Organization.create(
      { name, address, phone, email },
      { transaction }
    )

    const user = await userServices.create(
      organization.id,
      `Admin ${name}`,
      email,
      password,
      "admin",
      transaction
    )

    return { organization, user: { ...user.dataValues, password } }
  }

  async update(id, name, address, phone, email, transaction) {
    const organization = await this.findById(id, transaction)

    if (!organization) throw new Error("Organization not found")

    organization.name = name || organization.name
    organization.address = address || organization.address
    organization.phone = phone || organization.phone
    organization.email = email || organization.email

    return organization.save({ transaction })
  }

  async destroy(id, transaction) {
    const organization = await this.findById(id, transaction)

    if (!organization) throw new Error("Organization not found")

    organization.destroy({ transaction })
  }
}

module.exports = new OrganizationServices()
