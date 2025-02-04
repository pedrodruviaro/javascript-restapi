import dog from "../models/dog.js"
import user from "../models/user.js"

class UserServices {
  async getAll() {
    return await user.findAll()
  }

  async getById(id, transaction) {
    return user.findByPk(id, { transaction, include: dog })
  }

  async create(name, email, password, transaction) {
    const newUser = {
      name,
      email,
      password,
    }

    return await user.create(newUser, { transaction })
  }

  async update(id, name, email, password, transaction) {
    const user = await this.getById(id, transaction)

    const values = {
      name: name || user.name,
      email: email || user.email,
      password: password || user.password,
    }

    return await user.update(values, { transaction })
  }

  async destroy(id, transaction) {
    const user = await this.getById(id, transaction)
    return await user.destroy({ transaction })
  }
}

export default new UserServices()
