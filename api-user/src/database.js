const { Sequelize } = require("sequelize")

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.db = new Sequelize({
      dialect: "mysql",
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    })
  }
}

module.exports = new Database()
