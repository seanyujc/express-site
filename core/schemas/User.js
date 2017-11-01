const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  name: String,
  age: String,
  passwd: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UserSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }

  next()
})

UserSchema.statics = {
  fetch: function (cb) {
    return this.find({}).sort('meta.updateAt')
    exec(cb)
  },
  findById: function(id, cb){
    return this.findOne({_id: id})
    exec(cb)
  },
  findByNameAndPwd: function(name, passwd, cb){
    return this.find({name, passwd}, cb)
  }
}

module.exports = UserSchema