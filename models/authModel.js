const mongoose = require('mongoose')
const { isEmail } = require('validator')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
  },
  email: {
    type: String,
    required: [true, "please provide an email"],
    unique: [true, "email needs to be unique"],
    validate: {
      validator: isEmail,
      message: "please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minlength: 6,
  },
  company: {
    type: String,
    default: 'sassDefault-company'
  },
  role: {
    type: String,
    enum: ["sass-admin", "system-admin", "base-admin", "user"],
    default: "user",
  }
})

module.exports = mongoose.model('User', UserSchema)