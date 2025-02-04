import dotenv from "dotenv"
import express from "express"
import database from "./src/database.js"
import userRoutes from "./src/routes/user.js"
import dogRoutes from "./src/routes/dog.js"

dotenv.config()

const app = express()

app.use(express.json())

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/dogs", dogRoutes)

const PORT = process.env.PORT || 8080

database.db
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
