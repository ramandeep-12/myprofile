import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import "../style.css/nav.css";
import { NavLink,Link,Router } from "react-router-dom";
import {context} from "../App"

const Navbar=()=>{
  const {state,dispatch}=useContext(context);
  const Menu=()=>{
  if(state){
    return(
      <>
    <li className="navbar navbar-dark bg-dark">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout">logout</NavLink>
      </li>
      </>
    )
      
  }
  else{
    return(
      <>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About Me</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Registration</NavLink>
      </li>
     
      </>
    )
  }
  }


    return(
<>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="#">MyProfile</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <Menu/>
    </ul>

  </div>
</nav> 
</>
    )
}
export default Navbar