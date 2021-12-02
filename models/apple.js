const mongoose = require("mongoose") 
const appleSchema = mongoose.Schema({ 
 color: String, 
 quantity: {
    type: Number,
    min: 1,
    max: 9,
  
},
cost: {
    type: Number,
    min: 1,
    max: 1000,
  
} 
 
}) 

module.exports = mongoose.model("apple", 
appleSchema)

