const mongoose = require ('mongoose')
const AddresultSchema = mongoose.Schema({
EventName:{
    type: String,
    required: true,
},
date:{
    type:String,
    required: true,
},
time:{
    type:String,
    required:true,
    },
match:{
    type: String,
    required: true,
},
matchno:{
    type: Number,
    required: true,
},
team1name:{
    type: String,
    required: true,
},
team1score:{
    type:Number,
    required: true,
},
team2name:{
   type:String,
   required: true,
},
team2score:{
    type:Number,
    required: true,
},
winingteam:
{
    type:String,
    required: true,
}
})
module.exports = mongoose.model('Addresult', AddresultSchema)
