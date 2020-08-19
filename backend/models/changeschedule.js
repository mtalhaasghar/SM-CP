const mongoose = require ('mongoose')
const AddchangeSchema = mongoose.Schema({
EventName:{
    type: String,
    required: true,
},
Date:{
    type:Number,
    required: true,
    unique: true,
    },
Day:{
    type:String,
    required:true,
},
Time:{
    type:Number,
    required:true,
    unique:true,
    },
    Match:
    {
     type: String,
     required: true,   
    },
    team1:{
        type: String,
        required: true,
    },
    team2:
    {
        type: String,
        required: true,
    },
FeildofSport:
{
    type:String,
    required:true,

}
})
module.exports = mongoose.model('Addchangeschedule', AddchangeSchema)
