const mongoose = require ('mongoose')
const AddstudentSchema = mongoose.Schema({
studentName:{
    type: String,
    required: true,
    },
registration:{   
    type:String,
    required:true,
},
emailadress:{
    type: String,
    required: true,
    unique: true,
    },
    rollno:{
        type:String,
        required: true,
        unique: true,
        trim: true,
    },
    phone:{
        type:Number,
        required: true,
        unique: true,
        trim: true,
    },
FeildofSport:
{
    type:String,
    required:true,
},
category:{
    type: String,
    required: true,
}
})
module.exports = mongoose.model('Addstudent', AddstudentSchema)
