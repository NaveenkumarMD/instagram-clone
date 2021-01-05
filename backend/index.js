const express=require('express')
const app=express()
const mongoose=require('mongoose')
const port=5200
app.use(express.json())
const {url}=require('./keys/key')


mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("successfully connected with mongodb through mongoose")
})
mongoose.connection.on('error',(error)=>{
    console.log("you got an error buddy")
})
require('./model/post')
require('./model/users')
app.use(require('./router/auth'))
app.use(require('./router/postrouter'))
app.listen(port,()=>{
    console.log("done.....")
})