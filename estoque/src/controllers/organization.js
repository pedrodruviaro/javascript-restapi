const organizationServices = require("../services/organization")

class OrganizationController {
  async findById(req, res) {
    try {
      const { id } = req.params
      const organization = await organizationServices.findById(id)

      res.status(200).json({ organization })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async create(req, res) {
    try {
      const { name, address, phone, email } = req.body
      const organization = await organizationServices.create(
        name,
        address,
        phone,
        email
      )

      res.status(200).json({ organization })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const { name, address, phone, email } = req.body
      const organization = await organizationServices.update(
        id,
        name,
        address,
        phone,
        email
      )

      res.status(200).json({ organization })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params
      const organization = await organizationServices.destroy(id)

      res.status(200).json({ organization })
    } catch (error) {
      res.status(500).json({ msg: error?.message })
    }
  }
}

module.exports = new OrganizationController()
