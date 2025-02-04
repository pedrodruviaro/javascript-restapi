import { Sequelize } from "sequelize"

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.db = new Sequelize({
      dialect: "mysql",
      host: "localhost",
      port: "3307",
      username: "root",
      password: "",
      database: "petshop",
    })
  }
}

export default new Database()
