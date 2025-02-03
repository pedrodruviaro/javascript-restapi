const person = require("../model/person")
const user = require("../model/user")

class ServicePerson {
  async FindAll() {
    return await person.findAll()
  }

  async FindById(id) {
    return await person.findByPk(id, {
      include: { model: user },
    })
  }

  async Create(name, address, userId) {
    if (!name) {
      throw new Error("Informar nome")
    } else if (!address) {
      throw new Error("Informar endereço")
    } else if (!userId) {
      throw new Error("Informar o id do usuário")
    }

    await person.create({ name, address, userId })
  }

  async Update(id, name, address) {
    const oldPerson = await this.FindById(id)

    oldPerson.name = name || oldPerson.name
    oldPerson.address = address || oldPerson.address

    await oldPerson.save()

    return oldPerson
  }

  async Delete(id) {
    const personToDestroy = await this.FindById(id)
    await personToDestroy.destroy()
  }
}

module.exports = new ServicePerson()
