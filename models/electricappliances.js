const mongoose = require("mongoose")
const electricappliancesSchema = mongoose.Schema({
    electricitems: String,
    company: {
        type: String,
        required: true,
        match: /^[a-zA-Z]+$/
      },
    price: {
        type:Number,
        min: 1,
        max: 5000 } 
})
module.exports = mongoose.model("electricappliances",electricappliancesSchema)