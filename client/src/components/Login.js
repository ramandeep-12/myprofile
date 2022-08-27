import React,{useContext, useState} from "react"
import login from "../images/login.jpg";
import "../style.css/login.css";
import {NavLink,useNavigate}from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {context} from "../App";
const Login=()=>{
    const {state,dispatch}=useContext(context);

    const history=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const loginbutton=async(e)=>{
      e.preventDefault();
      const res=await fetch("/login",{
          method:"POST",
          headers:{
              "content-type":"application/json"

          },
          body: JSON.stringify({
              email,password
          })
      });
      console.log(res);
      const data=res.json();
    //   console.log(data)
    //   console.log(res.status)
      if(res.status=== 400){
          window.alert("you entered wrong credentials");
      }
      else{
          dispatch({type:"USER",payload:true})
          window.alert("sigin successfully");
          history('/');
      }

    }

    return(
        <>
        <section className="sign-in ">
            <div className="container mt-5">
                <div className="sign-in-content">
<div className="row">
                    <div className="signin-image col-6">
                        <figure >
                            <img src={login} alt="login page" />

                        </figure>
                        <NavLink to="/signup" className="signup-image-link" >create an account</NavLink>
                    </div>


                    <div className="sign-in-form col-6 ">
                        <h2 className="form-title">sign up</h2>

                        <form className="register-form" id="register-form" method="POST">
                            <div class="form-group">
                                <label htmlFor="email">
                                    <i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" autoComplete="off" placeholder="your email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                           
                            
                            <div class="form-group">
                                <label htmlFor="password">
                                    <i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            
                            <div className="form-group form-button">
                                <input type="submit" name="login" id="login" className="form-submit" value="Log In" onClick={loginbutton} />

                            </div>
                        </form>
                    </div>
                </div>
</div>
            </div>
        </section>
        </>
    )
}
export default Login