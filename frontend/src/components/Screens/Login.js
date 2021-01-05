import React,{useState,Dispatch,useContext}from 'react'
import {Link,useHistory} from 'react-router-dom'
import {Usercontext} from '../../App'
const Login=()=>{
    
    const history=useHistory()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {state,dispatch} =useContext(Usercontext)
    const postlogindata=()=>{
        fetch("/signin",{
            method:"post",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json()).then(data=>{
            if(data.message){
                alert(data.message)
            }
            else{
                
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("userdetails",JSON.stringify(data.user))
                dispatch({type:'USER',payload:data.user})
                history.push('/')
                
            }
        })
    }
    return(
        <div class="conatiner">
            <br/><br/><br/>
            <div class="card" >
                <h1 id="instagram-heading1" >Instagram</h1>
                <input type="text" className="in" placeholder="username or Email" value={email} 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <input type="password" className="in" placeholder="Password" value={password} 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <button className="btn btn-primary" id="login-btn" onClick={postlogindata}>Log in</button>
                <Link to="signup"> New to instagram ?</Link>
            </div>
        </div>
    )
}
export default Login