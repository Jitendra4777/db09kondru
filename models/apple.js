const mongoose = require("mongoose") 
const appleSchema = mongoose.Schema({ 
 color: String, 
 quantity: Number, 
 cost: Number 
}) 
 
module.exports = mongoose.model("apple", 
appleSchema)

