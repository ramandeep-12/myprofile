import React, {useState} from "react"

import '../style.css/form.css';

import signin from "../images/signin.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink,useNavigate} from "react-router-dom"


const Signup = () => {

    const history=useNavigate();
   const[user,setUser]=useState({
       name:"",email:"",phone:"",work:"",password:"",cpassword:""
})
let name,value;
const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});

}
const postData=async(e)=>{
   e.preventDefault();
   const {name,email,phone,work,password,cpassword}=user;
   const response=await fetch("/register",{
       method:"POST",
       headers:{
           "content-type":"application/json",
        //    "accept":"application/json"
       },
       body:JSON.stringify(
           {
            name,email,phone,work,password,cpassword

           }
       )
   });
   const data=await response.json();
   
   if(data.error){
        window.alert("invalid registration");
        console.log("invalid Registration");
   }
   else{
    window.alert(" registration completed");
    console.log("Registration completed");
    history("/login");
   }
}

    return (
        <>
        <section className="signup">
            <div className="containersignup mt-5">
                <div className="signup-content">
                    <div className="row">
                        <div className="sign-up-image col-6">
                        <figure >
                            <img src={signin} alt="login page" />

                        </figure>
                        <NavLink to="/login" className="signin-image-link" >Already Registered</NavLink>
                        </div>
                    <div className="signup-form col-6">
                        <h2 className="form-title">sign up</h2>

                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="zmdi zmdi-account"></i></label>
                                <input type="text" name="name" id="name" autoComplete="off" placeholder="your name" value={user.name} onChange={handleInputs} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    <i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" autoComplete="off" placeholder="your email" value={user.email} onChange={handleInputs} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">
                                    <i className="zmdi zmdi-phone"></i></label>
                                <input type="number" name="phone" id="phone" autoComplete="off" placeholder="your phone no"  value={user.phone} onChange={handleInputs} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="work">
                                    <i className="zmdi zmdi-slideshow"></i></label>
                                <input type="text" name="work" id="work" autoComplete="off" placeholder="your work"  value={user.work} onChange={handleInputs}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="your password"  value={user.password} onChange={handleInputs}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">
                                    <i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="your confirm password"  value={user.cpassword} onChange={handleInputs} />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={postData}  />

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
export default Signup