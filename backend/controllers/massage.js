const express=require('express')
const router=express.Router()
const Addmassage=require('../models/AddTeacherRecord')
router.post('/massage',(res,req)=>{
    const  addrecord=new Addmassage({
        name:req.body.name,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        inbox:req.body.inbox,
        sentmassage:req.body.sentmassage
        
        


    });
    try{
           const savedPost7=await addrecord.save();
           res.json(savedPost7);
    }
    catch (err){
        res.json({message: err});

    }
});
module.exports=router;