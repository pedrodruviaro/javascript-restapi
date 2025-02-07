const jwt = require("jsonwebtoken")
const userServices = require("../services/user")

function authMiddleware(role) {
  return (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
      return res.status(401).json({ msg: "Invalid token or not provided" })
    }

    jwt.verify(token, "MySecret", async (err, decoded) => {
      if (err) {
        console.log(err)
        return res.status(401).json({ msg: "Invalid token or not provided" })
      }

      const verify = await userServices.verify(decoded.id, decoded.role)

      if (!verify || (role && role === decoded.role)) {
        return res.status(401).json({ msg: "Invalid token or not provided" })
      }

      req.session = decoded
      next()
    })
  }
}

module.exports = authMiddleware
