const mongoose = require ('mongoose')
const AdminSchema = mongoose.Schema({
firstname:{
    type: String,
    required: true,
    unique: true
},
lasttname:{
    type: String,
    required: true,
    unique: true
},
Email:{
    type: String,
    required: true,
    unique: true
},
Phone:{
    type:Number,
    required: true,
    unique:true,
    max: 15
    
},
password:
{
    type:String,
    required:true,
    unique:true,
    trim:true
}
})
module.exports = mongoose.model('Adminprofile', AdminSchema)

