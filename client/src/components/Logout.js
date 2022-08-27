import React,{useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {context} from "../App";

const Logout=()=>{
    const {state,dispatch}=useContext(context);

    const history=useNavigate();
useEffect(()=>{
fetch('/logout',{
    method:"GET",
    headers:{
        Accept:"application/json",
        "content-type":"application/json"
    },
    credentials:"include"
}).then((res)=>{
console.log(res);
if(res.status===200){
    dispatch({type:"USER",payload:false})
    alert("logout successfully");
    history('/login');
}
else{
    throw new Error("not able to logout ")
}
}).catch((err)=>{
    console.log(err);
})
},[])
return(
    <h1>you are logged out plzz login again </h1>
)
}
export default Logout