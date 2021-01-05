import React from 'react'
import {useHistory } from 'react-router-dom'

const Signupsuccess=()=>{
    const history=useHistory()
    const gotologinpage=()=>{
        history.push('/Login')
    }
    return(
        <div className="card">
          
            <h3>Signed up successfully</h3>
            <button className="btn btn-primary" id="login-btn" onClick={gotologinpage}>Log in</button>
            
        </div>
        
    )
}
export default Signupsuccess