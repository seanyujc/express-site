const mongoose = require('mongoose')
const UserSchema = require('../schemas/User')
const User = mongoose.model('User', UserSchema)

module.exports = User