import express from "express"
import peopleRouter from "./src/routes/people.js"
import dogRouter from "./src/routes/dog.js"

const app = express()

app.use(express.json())

app.use("/api/v1", peopleRouter)
app.use("/api/v1", dogRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`**** Server running on port ${PORT} ****`)
})
