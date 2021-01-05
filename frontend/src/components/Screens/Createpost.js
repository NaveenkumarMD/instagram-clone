import React,{useState,useEffect} from 'react'
const Createpost=()=>{
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [image,setImage]=useState("")
    const [uri,setUri]=useState("")
    useEffect(()=>{
        if(uri){
            fetch("/createposts",{
                method:"post",
                headers:{
                    "content-type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    title,
                    body,
                    pic:uri,
    
                })
            }).then(res=>res.json()).then(data=>{
                console.log(data.result)
                
            }).catch(err=>{
                alert("an error occured")
            })
        }
    },[uri])
    const postingimageanddata=()=>{
        console.log("posting image to cloudinary")
        const data=new FormData
        data.append("file",image)
        data.append("upload_preset","instagram")
        data.append("cloud_name","naveenkumarmd")
        fetch("https://api.cloudinary.com/v1_1/naveenkumarmd/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json()).then(data=>{
            
            setUri(data.url)
            
        }).catch(error=>{
            console.log("error occured")
        })      
    }
 

   
    return(
        <div className="createpost" style={{paddingTop:"40px"}}>
            <div className="card">
                <h1 id="instagram-heading1" >Instagram</h1>
                <input type="text"  className="in" placeholder="Title" value={title}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                />
                <input type="text"  className="in" placeholder="Content" value={body}
                onChange={(e)=>{
                    setBody(e.target.value)
                }}
                />
                <div class="form-group">
                    
                <input type="file" className="form-control-file in" style={{border:"0"}} id="exampleFormControlFile1"
                onChange={(e)=>{
                    setImage(e.target.files[0])
                }} />
                </div>
                <button className="btn btn-primary" id="login-btn" onClick={postingimageanddata} >Upload</button>
                
            </div>
        </div>
    )
}
export default Createpost