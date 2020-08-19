const mongoose = require ('mongoose')
const AddTeacherrecordSchema = mongoose.Schema({
TeacherName:{
    type: String,
    required: true,
},
Cnic:{
    type:Number,
    required: true,
    unique: true,
    },
EmailID:{
    type:String,
    required:true,
    unique: true,
},
Phone:{
    type:Number,
    required:true,
    unique:true,
    },
FeildofSport:
{
    type:String,
    required:true,
},
department:{
    type: String,
    required: true,
}
})
module.exports = mongoose.model('AddTeacherrecord', AddTeacherrecordSchema)
