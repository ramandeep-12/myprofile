const express=require("express");
const app=express();
const dotenv=require("dotenv");
const s = require("./models/userSchema");
const port=process.env.PORT||5000;
require("./db/conn");
const jwt=require("jsonwebtoken")
const authenticate = require("./middleware/authenticate");

dotenv.config({path:'./config.env'});

app.use(express.json());

const r=require("./router/routes");
app.use(r);
const cookie=require("cookie-parser");
app.use(cookie());

app.get('/about',authenticate,(req,res)=>{

    res.send(req.rootuser)
})
app.get('/getdata',authenticate,(req,res)=>{

    res.send(req.rootuser)
})
app.post('/contact',authenticate,async(req,res)=>{
    try{
      const {name,email,phone,message}=req.body;
      if(!name||!email||!phone||!message){
          return res.json({error:"plzz fill the contact form"});
      }
      const usercontact=await s.findOne({_id:req.userid});
      if(usercontact){
          const usermessage=await usercontact.addMessage(name,email,phone,message);
          await usercontact.save();
          res.status(201).json({message:"user contact succesfully"});
      }

    }
    catch(err){
console.log(err);
    }
})
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})
