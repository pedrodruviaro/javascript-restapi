require("dotenv").config()
const express = require("express")
const userRouter = require("./src/routes/user")
const personRouter = require("./src/routes/person")
const database = require("./src/database.js")
const ApiUser = require("./src/api/user.js")
const authMiddleware = require("./src/middlewares/auth.js")

const app = express()
const porta = 8080
app.use(express.json())

app.post("/api/v1/user", ApiUser.Create)
app.post("/api/v1/login", ApiUser.Login)

// auth middleware
app.use(authMiddleware)
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
