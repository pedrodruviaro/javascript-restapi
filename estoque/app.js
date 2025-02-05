const dotenv = require("dotenv").config()
const express = require("express")
const database = require("./src/database")

const app = express()
const PORT = process.env.PORT || 8000

async function initServer() {
  try {
    await database.db.sync({ force: true })

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

initServer()
