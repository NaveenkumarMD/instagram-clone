import React,{useEffect,createContext,useReducer}from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Screens/Home'
import Profile from './components/Screens/Profile'
import Login from './components/Screens/Login'
import Signup from './components/Screens/Signup'
import Createpost from './components/Screens/Createpost'
import Signupsuccess from './components/Screens/Signupsuccess'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import {reducer,initialstate} from'./reducer/userreducer'
export const Usercontext=createContext()

function Routing(){
  const history=useHistory()
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("userdetails"))
    if(user){
      history.push('/')
    }
    else{
      history.push('/login')
    }
    
  },[])
  return(
    <Switch>
    <Route  exact path="/">
    <Home/>
      </Route>
      <Route exact path="/Login">
        <Login/>
      </Route>
      <Route exact path="/Signup">
        <Signup/>
      </Route>
      <Route exact path="/Profile">
        <Profile/>
      </Route>
      <Route  exact path="/createpost" >
        <Createpost />
      </Route>
      <Route  exact path="/signupsuccess">
        <Signupsuccess/>
      </Route>
      </Switch>
  )
}
function App() {
 const [state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
     <Usercontext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      <Navbar/>
        <Routing />
      </BrowserRouter>
      </Usercontext.Provider>
    </div>
  )
}

export default App;
