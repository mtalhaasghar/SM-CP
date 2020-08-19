const express=require('express')
const router=express.Router()
const AddStudent=require('../models/AddrecordSchema')
router.post('/addrecord',(res,req)=>{
    const  addrecord=new AddStudent({
        studentname:req.body.studentname,
        registration:req.body.registration,
        emailadress:req.body.emailadress,
        rollno:req.body.rollno,
        phone:req.body.phone,
        Feildofsports:req.body.Feildofsports,
        category:req.body.category


    });
    try{
           const savedPost1=await addrecord.save();
           res.json(savedPost1);
    }
    catch (err){
        res.json({message: err});

    }
});
module.exports=router;