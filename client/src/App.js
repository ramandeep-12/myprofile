import React, { createContext, useReducer } from "react";
import Navbar from './components/Navbar'
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import { Route, Routes } from 'react-router-dom';
 
export const context=createContext(); 

const Routing=()=>{

return( 
   <>
<Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route> 
      
      <Route path="/signup" element={<Signup/>} ></Route>
      <Route path="/logout" element={<Logout/> } ></Route>
      </Routes>

  </>
)
}
const initialstate=null;
const reducer=(state,action)=>{
if(action.type === "USER"){
  return action.payload;
}
return state;
}
const App=()=> {
  const [state,dispatch]=useReducer(reducer,initialstate);
  return (
    <>
      
      <context.Provider value={{state,dispatch}}>
      <Navbar />
        <Routing/>
      </context.Provider>

    </>
  )
}

export default App;
