const express=require('express')
const router=express.Router()
const AddTeacherrecord=require('../models/AddTeacherRecord')
router.post('/addteacherrecord',(res,req)=>{
    const  addrecord=new AddTeacherrecord({
        Teachername:req.body.Teachername,
        Cnic:req.body.Cnic,
        EmailID:req.body.EmailID,
        Phone:req.body.Phone,
        department:req.body.department,
        Feildofsports:req.body.Feildofsports
        


    });
    try{
           const savedPost2=await addrecord.save();
           res.json(savedPost2);
    }
    catch (err){
        res.json({message: err});

    }
});
module.exports=router;