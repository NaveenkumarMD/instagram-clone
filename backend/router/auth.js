const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const loginmiddleware=require('../middleware/loginmiddleware')
const users=mongoose.model('users')
const bcrypt=require('bcrypt')
const{secret}=require('../keys/key')
const jwt=require('jsonwebtoken')
router.get('/protected',loginmiddleware,(req,res)=>{
    res.send("You are accessing the protected resources")
})

router.post('/signup',(req,res)=>{

    const {name,email,password}=req.body
    console.log(name,email,password)
    if(!name || !email || !password){
        res.json({Error:"enter all the fields"})
    }
    bcrypt.hash(password,12).then(hashedpassword=>{
        users.findOne({email:email})
        .then((saveduser)=>{
            if(saveduser){
                console.log("already exists")
                console.log("check is this your password"+saveduser.password)
                return res.status(442).json({message:"already present"})
            }
            console.log(hashedpassword)
            const data=new users({
                name:name,
                email:email,
                password:hashedpassword
            })
            data.save().then(i=>{
                console.log("done sign in router successful")
                res.json({success:"successful"})
            })
        })
    })


    

})
router.post('/signin',(req,res)=>{
    
    const {email ,password}=req.body
    console.log(email,password)
    users.findOne({email:email}).then(saveduser=>{
        if(!saveduser){
            console.log("Enter valid user name and password")
            return res.status(442).json({message:"check the mail id and password"})
        }
        bcrypt.compare(password,saveduser.password).then(match=>{
            if(match){
                console.log("log in successfull")
                const token=jwt.sign({_id:saveduser._id},secret)
                console.log(token)
                const {_id,email,name,password}=saveduser
                res.json({token:token,user:{_id,name,email,password}})
            }
            else{
                console.log("Enter valid password and mail id")
                return res.status(442).json({"message":"check the mail id and password"})
            }
        })
    })
})
module.exports=router