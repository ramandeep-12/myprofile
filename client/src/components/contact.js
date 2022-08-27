import React,{useEffect,useState} from "react"
import "../style.css/contact.css";
import 'bootstrap/dist/css/bootstrap.css';
const Contact = () => {
  const [userData,setUserData]=useState({
    name:"",
    email:"",
    phone:"",
    message:""
  })

  const callaboutpage = async () => {
      try {
          const res = await fetch('/getdata', {
              method: "GET",
              headers: {
                  "Content-Type": "application/json"
              },
          });
          const data = await res.json();
          console.log(data);
          setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
          if (!res.status===200) {
              throw new Error(res.err);
              console.log(res.err);
          }

      }
      catch (err) {
          console.log(err);
      }
  }
  
      useEffect(() => {            
          callaboutpage();
      },[])
 const inputhandles=(e)=>{
const name=e.target.name;
const value=e.target.value;
setUserData({...userData,[name]:value});
 }

 const submitform=async(e)=>{
e.preventDefault();
const {name,email,phone,message}=userData;
const res=await fetch('/contact',{
  method:"POST",
  headers:{
"content-type":"application/json"
  },
  body:JSON.stringify({
    name,email,phone,message
  })
})

const data=await res.json();
if(!data){
  console.log("message not send");
}
else{
  alert("message sent successfully");
  setUserData({...userData,message:""});
}
 }


  return (
   

    <>
    <div className="contact">
    


 <div className="contact_form" >
<div className="containercontact" >
  <div className="row" >
    <div className="col-lg-10 offset-lg-1">
      <div className="contact_form_container  mt-2">
        <div className="contact_form_title">
          Get In Touch
        </div>
        <form id="contact_form" method="POST">
          <div className="contact_form_namme d-flex justify-content-between align-items-between">
            <input type="text" name="name" value={userData.name} onChange={inputhandles}  id="contact_form_name" className="contact_form_name" placeholder="enter your name " required="true"/>
            <input type="email" name="email" value={userData.email} onChange={inputhandles}  id="contact_form_email" className="contact_form_email" placeholder="enter your email " required="true"/>
           <input type="number" name="phone" value={userData.phone} onChange={inputhandles}  id="contact_form_phone" className="contact_form_phone" placeholder="enter your phone " required="true"/>

          </div>
          <div className="contact_foem_text mt-5">
            <textarea name="message" value={userData.message} onChange={inputhandles} className="text_field contact_form_message" placeholder="message" cols="60" rows="10"></textarea>
          </div>
          <div className="contact_form_button">
            <button type="submit" onClick={submitform} className="button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</div>

   
</>
  )
}
export default Contact