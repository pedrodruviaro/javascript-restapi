const user = require("../model/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const secretKey = "MyMegaSuperKey"
const HASH_SALT = 10

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

    const hashedPassword = await bcrypt.hash(password, HASH_SALT)

    return user.create({ email, password: hashedPassword }, { transaction })
  }

  async Update(id, email, password, transaction) {
    const oldUser = await this.FindById(id, transaction)

    oldUser.email = email || oldUser.email
    oldUser.password = password
      ? await bcrypt.hash(password, HASH_SALT)
      : oldUser.password

    await oldUser.save({ transaction })

    return oldUser
  }

  async Delete(id, transaction) {
    const userToDestroy = await this.FindById(id, transaction)
    await userToDestroy.destroy({ transaction })
    return true
  }

  async Login(email, password) {
    if (!email) {
      throw new Error("Email é obrigatório")
    } else if (!password) {
      throw new Error("Senha é obrigatória")
    }

    const currentUser = await user.findOne({
      where: {
        email,
      },
    })

    if (!currentUser) {
      throw new Error("Credenciais inválidas")
    }

    const verifyPassword = await bcrypt.compare(password, currentUser.password)

    if (!verifyPassword) {
      throw new Error("Credenciais inválidas")
    }

    return jwt.sign({ id: currentUser.id }, secretKey, { expiresIn: 60 * 60 })
  }
}

module.exports = new ServiceUser()
