import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.status(200).send("Hello world!")
})

app.get("/sum", (req, res) => {
  const { n1, n2 } = req.query

  if (!n1 || !n2) {
    throw new Error("Missing query params")
  }

  res.send(`The sum is ${n1 + n2}`)
})

app.listen(8080, () => {
  console.log("server running!!")
})
