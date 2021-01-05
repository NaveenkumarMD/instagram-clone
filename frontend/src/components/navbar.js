import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {Usercontext} from '../App'
const Navbar=()=>{
    const {state,dispatch}=useContext(Usercontext)
    const rendering=()=>{
        if(state){
            return [
                <Link id="nav-text1" to="/Profile">Profile</Link>,
                <Link id="nav-text1" to="/Createpost">Create</Link>
            ]
        }
        else{
            return [
                <Link id="nav-text1" to="/Signup">Sign up</Link>,
                <Link id="nav-text1" to="/Login" >Log in</Link>
            ]
        }
    }
    return(
        <div>
           <nav className="navbar  navbar-dark bg-dark">
  <Link className="navbar-brand" to={state?"/" :"/login"} id="instagram-heading">Instagram</Link>
  <div id="nav-right">
        {rendering()}
  </div>
</nav>
        </div>
    )

}
export default Navbar