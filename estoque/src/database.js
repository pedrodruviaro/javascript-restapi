const { Sequelize } = require("sequelize")

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.db = new Sequelize({
      database: "estoque",
      host: "localhost",
      username: "root",
      password: "",
      dialect: "mysql",
      port: 3307,
    })
  }
}

module.exports = new Database()
