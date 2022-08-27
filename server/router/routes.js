const express = require("express");
const router = express.Router();
const s = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");



router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz fill the fields properly" });
    }
    try {
        const userexit = await s.findOne({ email: email });
        if (userexit) {
            return res.status(422).json({ error: "you are already registered" });
        }
        else if (password != cpassword) {
            return res.json({ error: "password mismatched" });
        }
        else {
            const user = new s(req.body);
            // const user=new s({name,email,phone,work,password,cpassword});
            await user.save();
            res.status(201).json({ message: "user registered successfully" });
        }
    }
    catch (err) {
        console.log(err);
    }
})

router.post("/login", async (req, res) => {


    try {
        // let token;
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "plz fill the data" });
        }


        const userlogin = await s.findOne({ email: email });

        if (userlogin) {

            const ismatch = await bcrypt.compare(password, userlogin.password);

            // creating cookie

            const token = await userlogin.generateAuthToken();
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 500000),
                httpOnly: true
            })
            if (!ismatch) {
                res.status(400).send({ error: "invalid credentials" })

            }
            else {
                res.json({ message: "user sign in successfully" });

            }
        }

        else {
            res.json({ message: "invalid cedentials1" });
        }
    }
    catch (err) {
        console.log(err);
    }
})
router.get('/logout',(req,res)=>{
    console.log("hello my logout page");
    res.clearCookie("jwt",{path:"/"});
    res.status(200).send("user logout");
})
module.exports = router;
