const jwt = require('jsonwebtoken')

async function createJWT(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" })
  return token
}

async function verifyToken(token) {
  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)
  return verifiedToken
}

module.exports = { createJWT, verifyToken }
