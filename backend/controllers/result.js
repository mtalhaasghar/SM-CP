const express=require('express')
const router=express.Router()
const Addresult=require('../models/Adminprofile')
router.post('/result',(res,req)=>{
    const  addrecord=new Addresult({
        EventName:req.body.dirstname,
        date:req.body.date,
        time:req.body.time,
        matchno:req.body.matchno,
        match:req.body.match,
        team1name:req.body.team1name,
        team1score:req.body.team1score,
        team2name:req.body.team1name,
        team2score:req.body.team1score,
        winingteam:req.body.winingteam


        
        });
    try{
           const savedPost9=await addrecord.save();
           res.json(savedPost9);
    }
    catch (err){
        res.json({message: err});

    }
});
module.exports=router;