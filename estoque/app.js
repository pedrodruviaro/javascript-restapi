require("dotenv").config()
const express = require("express")
const database = require("./src/database")
const inventoryRouter = require("./src/routes/inventory")
const inventoryMovementRouter = require("./src/routes/inventoryMovement")
const organizationRouter = require("./src/routes/organization")
const productRouter = require("./src/routes/product")
const userRouter = require("./src/routes/user")
const userController = require("./src/controllers/user")

const app = express()

app.use(express.json())

// Routes
app.post("/api/v1/login", userController.login)

app.use("/api/v1/inventory", inventoryRouter)
app.use("/api/v1/inventoryMovement", inventoryMovementRouter)
app.use("/api/v1/organization", organizationRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/user", userRouter)

async function initServer() {
  const PORT = process.env.PORT || 3000

  try {
    await database.db.sync({ force: false })

    app.listen(PORT, () => {
      console.info(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error(`Failed to connect to db: ${error}`)
  }
}

initServer()
