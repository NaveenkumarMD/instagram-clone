import React from 'react'
import profilephoto from './img.jpeg'
const Profile=()=>{
    return(
        <div>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                paddingBottom:"20px",
                borderBottom:"1px solid black"
            }}>
                    <div>
                    <img  src={profilephoto}  style={{height:"160px",width:"160px",borderRadius:"80px"}}/>
                   
                    </div>
                    <div style={{width:"40%"}}>
                    <h4>Naveenkumar M</h4>
                    <br/>
                    <div style={{display:"flex", justifyContent:"space-between" }}>
                        <h5>900 posts</h5>
                        <h5>260 following</h5>
                        <h5>70 followers</h5>
                        
                    </div>
                    </div>
               
                <div>

                </div>
            </div>
            <div className="gallery">
                <img src={profilephoto} className="item"/>
                <img src={profilephoto} className="item"/>
                <img src={profilephoto} className="item"/>
                <img src={profilephoto} className="item"/>
                <img src={profilephoto} className="item"/>
                <img src={profilephoto} className="item"/>
                <img src={profilephoto} className="item"/>
            </div>
        </div>
    )
}
export default Profile