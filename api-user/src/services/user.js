const user = require("../model/user")

class ServiceUser {
  async FindAll(transaction) {
    return user.findAll({ transaction })
  }

  async FindById(id, transaction) {
    return user.findByPk(id, { transaction })
  }

  async Create(email, password, transaction) {
    if (!email) {
      throw new Error("Informar email")
    } else if (!password) {
      throw new Error("Informar senha")
    }

    return user.create({ email, password }, { transaction })
  }

  async Update(id, email, password, transaction) {
    const oldUser = await this.FindById(id, transaction)

    oldUser.email = email || oldUser.email
    oldUser.password = password || oldUser.password

    await oldUser.save({ transaction })

    return oldUser
  }

  async Delete(id, transaction) {
    const userToDestroy = await this.FindById(id, transaction)
    await userToDestroy.destroy({ transaction })
    return true
  }
}

module.exports = new ServiceUser()
