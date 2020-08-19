const mongoose = require ('mongoose')
const AddscheduleSchema = mongoose.Schema({
Availablehours:{
    type: number,
    required: true,
    unique: true,
},
Duration:{
    type: String,
    required: true,
},
Date:{
    type:String,
    required: true,
    
}
})
module.exports = mongoose.model('Addschedule', AddscheduleSchema)
