const jwt=require("jsonwebtoken")

const s = require("../models/userSchema");
const router = require("../router/routes");



const authenticate=async(req,res,next)=>{
    
try{
const token=req.cookies.jwt;
const verifytoken=jwt.verify(token,process.env.SECRET);
const rootuser=await s.findOne({_id:verifytoken._id,"tokens.token":token});
if(!rootuser){


    throw new Error("user not found");
} 
else{
    req.token=token,
    req.rootuser=rootuser,
    req.userid=rootuser._id;
    next();
}
}
catch(err){
    res.status(401).send("unauthorised token")
    console.log(err)
}
}
module.exports=authenticate