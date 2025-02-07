const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const HASH_SALT = 12
const ROLES = ["admin", "employee"]

class UserServices {
  async findAll(organizationId, transaction) {
    return User.findAll({ where: { organizationId } }, { transaction })
  }

  async findById(organizationId, id, transaction) {
    return User.findOne({ where: { organizationId, id } }, { transaction })
  }

  async create(organizationId, name, email, password, role, transaction) {
    if (!organizationId) {
      throw new Error("No Organization Id Provided")
    } else if (!name) {
      throw new Error("Name is required")
    } else if (!email) {
      throw new Error("Email is required")
    } else if (!password) {
      throw new Error("Password is required")
    } else if (!role || !ROLES.includes(role)) {
      throw new Error("Role is required")
    }

    const hashedPassword = await bcrypt.hash(password, HASH_SALT)

    return User.create(
      { organizationId, name, email, password: hashedPassword, role },
      { transaction }
    )
  }

  async update(organizationId, id, name, email, password, role, transaction) {
    if (role && !ROLES.includes(role)) {
      throw new Error("Role is required")
    }

    // @todo -> verify admin

    const oldUser = await this.findById(organizationId, id, transaction)

    if (!oldUser) throw new Error("User not found")

    if (role && oldUser.role === "admin") {
      oldUser.role = role
    }

    oldUser.name = name || oldUser.name
    oldUser.email = email || oldUser.email
    oldUser.password = password
      ? await bcrypt.hash(password, HASH_SALT)
      : oldUser.password

    await oldUser.save({ transaction })

    return oldUser
  }

  async destroy(organizationId, id, transaction) {
    const oldUser = await this.findById(organizationId, id, transaction)

    if (!oldUser) throw new Error("User not found")

    oldUser.destroy({ transaction })
  }

  async login(email, password, transaction) {
    if (!email || !password) throw new Error("Email or password not provided")

    const user = await User.findOne({ where: { email } }, { transaction })

    if (!user) throw new Error("Invalid credentials")

    const passwordMatches = await bcrypt.compare(password, user.password)

    if (!passwordMatches) throw new Error("Invalid credentials")

    return jwt.sign(
      {
        id: user.id,
        role: user.role,
        organizationId: user.organizationId,
      },
      process.env.JWT_SECRET,
      { expiresIn: 60 * 60 }
    )
  }

  async verify(id, role, transaction) {
    return User.findOne({ where: { id, role } }, { transaction })
  }
}

module.exports = new UserServices()
