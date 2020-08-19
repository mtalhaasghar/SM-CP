const express=require('express')
const router=express.Router()
const dchangeschedule=require('../models/changeschedule')
router.post('/changeschedule',(res,req)=>{
    const  addrecord=new dchangeschedule({
               Date:req.body.Date,
               Day: req.body.Day,
                Time:req.body.Time,
               Match:req.body.Match,
               team1:req.body.team1,
                team2:req.body.team2,
              FeildofSport:req.body.FeildofSport
        


    });
    try{
           const savedPost5=await addrecord.save();
           res.json(savedPost5);
    }
    catch (err){
        res.json({message: err});

    }
});
module.exports=router;