const express=require('express')
const router=express.Router()
const Addevent=require('../models/AddEvent')
router.delete('/deleteevent',async(req,res)=>{
 try{
           const removedPost=await Addevent.remove({_id:req.params.postId});
           res.json(removedPost);
    }
    catch (err){    
        res.json({message: err});

    }
});
module.exports=router;