const {model,Schema} = require("mongoose")

const userModel = new Schema({
username:{ type:String, required:true},
email:{type:String, required:true},
password:{type:String, required:true},
usAdmin:{
    type:Boolean,
    default:false,
},

},{timestamps:true})

module.exports = model("User",userModel)


