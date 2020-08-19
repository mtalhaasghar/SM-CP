const express=require('express')
const router=express.Router()
const Addadminprofile=require('../models/Adminprofile')
router.post('/adminprofile',(res,req)=>{
    const  addrecord=new Addadminprofile({
        firstname:req.body.dirstname,
        lasttname:req.body.lastname,
        Email:req.body.Emai,
        Phone:req.body.Phone,
        password:req.body.password
        
        });
    try{
           const savedPost4=await addrecord.save();
           res.json(savedPost4);
    }
    catch (err){
        res.json({message: err});

    }
});
module.exports=router;