const crypto = require("crypto")

function generateRandomPassword() {
  return crypto.randomBytes(12).toString("hex")
}

module.exports = generateRandomPassword
