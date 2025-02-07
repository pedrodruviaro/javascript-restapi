const { Sequelize } = require("sequelize")

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.db = new Sequelize({
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      dialect: "mysql",
      port: process.env.DATABASE_PORT,
    })
  }
}

module.exports = new Database()
