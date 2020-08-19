const mongoose = require ('mongoose')
const AddEventSchema = mongoose.Schema({
EventName:{
    type: String,
    required: true,
    max: 10
},
Photo:{
    type: String,
    required: true
},
Description:{
    type: String,
    required: true
}
})
module.exports = mongoose.model('Addevent', AddEventSchema)
