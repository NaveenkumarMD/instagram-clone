import React,{useState}from 'react'
import {Link,useHistory} from 'react-router-dom'

const Signup=()=>{
    const history=useHistory()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const postingsignupdata=()=>{

        fetch("/signup" ,{
            method:"post",
            headers:{
                "content-type":"application/json",
                
            },
            body:JSON.stringify({
               name:name,
               email:email,
               password:password
            })
                
        }).then(res=>res.json()).then(data=>{
            if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
                if(data.Error){
                    alert(data.Error)
                }
                if(data.message){
                    alert("Already present")
                    history.push('/Login')
                }
                if(data.success){
                    
                    history.push('/Signupsuccess')
                }
            }
            else{
                alert("Enter valid Email id")
            }
 
        }).catch(error=>{
            console.log("an error occured")
        })
    }
    return(
        <div class="conatiner">
            <br/><br/><br/>
            <div class="card" >
                <h1 id="instagram-heading1" >Instagram</h1>
                <input type="text" className="in" placeholder="E-mail" value={email} 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <input type="text" className="in" placeholder="Name" value={name} 
                onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <input type="password" className="in" placeholder="Password" value={password} 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <button className="btn btn-primary" id="login-btn" onClick={postingsignupdata}>Sign in</button>
                <Link to="login"> Already have an account?</Link>

            </div>
        </div>
    )
}
export default Signup