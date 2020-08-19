const express=require('express')
const router=express.Router()
const Addschedule=require('../models/AddTeacherRecord')
router.post('/createschedule',(res,req)=>{
    const  addrecord=new Addschedule({
        Availablehours:req.body.Availablehours,
        Duration:req.body.Duration,
        Date:req.body.Date
       
        


    });
    try{
           const savedPost3=await addrecord.save();
           res.json(savedPost3);
    }
    catch (err){
        res.json({message: err});

    }
});
module.exports=router;