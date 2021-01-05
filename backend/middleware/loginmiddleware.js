const jwt=require("jsonwebtoken")
const mongoose=require('mongoose')
const {secret}=require('../keys/key')
const users=mongoose.model('users')
const middle=(req,res,next)=>{
    const{authorization}=req.headers
    if(!authorization){
        res.status(401).send("please log in again")
    }
    const token=authorization.replace("Bearer ","")
    console.log(token)
    jwt.verify(token,secret,(err,payload)=>{
        if(err){
            return res.status(401).send("authorization failed")
        }
       const {_id}=payload
        users.findById(_id).then(data=>{
            req.user=data
            next()
        })
        
    })
    

}
module.exports=middle