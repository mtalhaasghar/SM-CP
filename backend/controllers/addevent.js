const express=require('express')
const router=express.Router()
const Addevent=require('../models/AddEvent')
const user=[]
user.post('/addevent' , async (res,req)=>{
    const  addeventTeacher=new Addevent({
        Eventname: req.body.Eventname,
        Photo: req.body.Photo,
        Description: req.body.Description


    });
    try{
           const savedPost=await addeventTeacher.save();
           res.json(savedPost);
    }
    catch (err){
        res.json({message: err});

    }
});
module.exports=router;