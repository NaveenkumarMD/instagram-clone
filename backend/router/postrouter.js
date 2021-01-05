const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const postdata=mongoose.model('postdata')
const requirelogin=require('../middleware/loginmiddleware')
router.get('/myposts',requirelogin,(req,res)=>{
    postdata.find({postedby:req.user._id})
    .populate("postedby","name")
    .then(myposts=>{
        res.json({myposts})
    }).catch(error=>{
        res.send(error)
    })
})
router.get('/allposts',requirelogin,(req,res)=>{
    postdata.find().
    populate("postedby","name").then(result=>{
        res.json(result)
    }).catch(error=>{
        res.json({error:error})
    })
})
router.post('/createposts',requirelogin,(req,res)=>{
    const {title,body,pic}=req.body
    if(!title || !body || !pic){
        return res.status(442).json({"error":"enter the body and title"})
    }
    console.log(req.user)
    req.user.password=undefined
    const post=new postdata({
        title,
        body,
        image:pic,
        postedby:req.user
    })
    post.save().then(result=>{
        console.log("post saved")
        res.json({result:result})
    })
})
module.exports=router