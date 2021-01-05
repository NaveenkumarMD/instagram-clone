const mongoose=require('mongoose')
const  {ObjectId}=mongoose.Schema.Types
const postschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"no image"
    },
    postedby:{
        type:ObjectId,
        ref:"users"
    }

})
mongoose.model("postdata",postschema)