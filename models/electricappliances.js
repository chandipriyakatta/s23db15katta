const mongoose = require("mongoose")
const electricappliancesSchema = mongoose.Schema({
    electricitems: String,
    company: String,
    price: Number
})
module.exports = mongoose.model("electricappliances",electricappliancesSchema)