const servicePerson = require("../services/person")

class ApiPerson {
  async FindAll(_, res) {
    try {
      const people = await servicePerson.FindAll()

      res.status(200).send({ people })
    } catch (e) {
      res.status(500).send({ msg: e.message })
    }
  }

  async FindById(req, res) {
    try {
      const { id } = req.params
      const person = await servicePerson.FindById(id)

      res.status(200).send({ person })
    } catch (e) {
      res.status(500).send({ msg: e.message })
    }
  }

  async Create(req, res) {
    try {
      const { name, address, userId } = req.body
      await servicePerson.Create(name, address, userId)

      res.status(201).send()
    } catch (e) {
      res.status(500).send({ msg: e.message })
    }
  }

  async Update(req, res) {
    try {
      const { id } = req.params
      const { name, address } = req.body
      const user = await servicePerson.Update(id, name, address)

      res.status(200).send({ user })
    } catch (e) {
      res.status(500).send({ msg: e.message })
    }
  }

  async Delete(req, res) {
    try {
      const { id } = req.params
      servicePerson.Delete(id)

      res.status(204).send()
    } catch (e) {
      res.status(500).send({ msg: e.message })
    }
  }
}

module.exports = new ApiPerson()
