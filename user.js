const mongoose = require("mongoose")





const userSchema = new mongoose.Schema({
  email:{
    type:String
  },
  name:{
    type:String
  },
  age:{
    type:Number
  }
})
const User = mongoose.model("User", userSchema)

module.exports = User