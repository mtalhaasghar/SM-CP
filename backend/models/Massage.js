const mongoose = require ('mongoose')
const AddmassageSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    firstname:{
        type:String,
        required:true,
        trim: true,
    },
    lastname:
    {
        type:String,
        required: true,
        trim: true,
    },
    inbox:{
        type:String,
        required: true,
    },
    sentmassage:
    {
        type: String,
        rquired: true,
    }
})
module.exports = mongoose.model('Addmassage', AddmassageSchema)