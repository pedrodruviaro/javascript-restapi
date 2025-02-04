import { DataTypes } from "sequelize"
import database from "../database.js"

class Dog {
  constructor() {
    this.model = database.db.define("dogs", {
      name: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
    })
  }
}

export default new Dog().model
