import React,{useEffect, useState} from 'react'
import profilephoto from './img.jpeg'
const Home=()=>{
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch('/allposts',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }

    }).then(res=>res.json()).then(data=>{
      console.log(data)
      setdata(data)
     
    }).catch(err=>{
      console.log(err)
    })
  },[])

    return(
        <div className="home">
          {
            data.map(item=>{
              return(
                <div className="card home-card" style={{maxWidth:"600px"}}>
                <div style={{textAlign:"left"}}>
                    <span><img height="30px" width="30px" src={profilephoto} style={{borderRadius:"50%"}}/></span>
              <span><h5 style={{display:"inline-block",paddingLeft:"20px",paddingBottom:"5px"}} >{item.postedby.name}</h5></span>
                    
                </div>
                <div className="card-image">
                    <img src={item.image}   style={{maxWidth:"90%",height:"auto",borderRadius:"2px"}}/>
                </div>
                <p style={{textAlign:"left",marginLeft:"20px"}}>{item.body}</p>
                <div style={{display:"flex"
                    ,paddingTop:"2px",
                    paddingLeft:"20px",
                    
                    marginleft:"40px"
            }}>
                <svg width="1.5em" style={{marginRight:"10px"}} height="1.5em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>       
</svg>
<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-share" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg>
<svg width="1.5em" style={{marginLeft:"auto"}} height="1.5em" viewBox="0 0 16 16" class="bi bi-bookmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
</svg>
</div>              
  <input type="text" placeholder="Add comments" id="comment"/ >
            </div>

              )
            })
          }
   </div>
    )
}
export default Home