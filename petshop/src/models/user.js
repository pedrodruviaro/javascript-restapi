import database from "../database.js"
import { DataTypes } from "sequelize"
import dog from "./dog.js"

class User {
  constructor() {
    this.model = database.db.define("users", {
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
    })

    this.model.hasMany(dog)
    dog.belongsTo(this.model)
  }
}

export default new User().model
