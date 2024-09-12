
const mongoose = require('mongoose')

const ApplianceSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    }, 
    powerRating: {
        type:Number,
        required:true
    }, 
    numberOfAppliances: {
        type:Number,
        default:0
    },
    typeOfAppliance: {
        type:Number,
        min:1,
        max:3,
        default:[3]
    },
    iconName: {
        type: String
    }
})

module.exports = mongoose.model('Appliance',ApplianceSchema)