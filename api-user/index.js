require("dotenv").config()
const express = require("express")
const userRouter = require("./src/routes/user")
const personRouter = require("./src/routes/person")
const database = require("./src/database.js")

const app = express()
const porta = 8080
app.use(express.json())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/person", personRouter)

database.db
  .sync({ force: false })
  .then(() => {
    app.listen(porta, () => {
      console.log("servidor rodando na porta " + porta)
    })
  })
  .catch((error) => {
    console.log(error)
  })
