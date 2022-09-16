const jwt = require('jsonwebtoken');
const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();
const bcrypt = require('bcrypt');
const authenticate = require ("../middleware/authenticate");
require('../db/conn');

const cookieParser =require("cookie-parser");
router.use(cookieParser())

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

router.post('/register', async (req, res) => {
    const {name, email,phone, work, password, cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
    return res.status(422).json({error : "Plz filled the field property"});
    }
    try{     
       const userExist= await User.findOne({email:email})
       if(userExist){
           return res.status(422).json({error:"Email already Exist"});
        } else if(password != cpassword) {
            return res.status(422).json({message: "Password are not matchnig"});
        } else{

            
    const user = new User ({name, email,phone, work, password, cpassword});
       
await user.save();
res.status(201).json({message:"user registered successfuly"})
 }
}
catch(err){console.log(err)}
})

router.post('/signin', async(req,res)=>{

try{
    let token;
    const{email,password} = req.body;
    if(!email || !password){
    return res.status(400).json({error:"Plz Filled the data"})
    }
    const userLogin = await User.findOne({email:email});
   

if(userLogin){
    const isMatch = await bcrypt.compare(password, userLogin.password);
     token =  await userLogin.generateAuthToken();
     console.log(token);

     res.cookie("jwttoken",token,{
         expires:new Date(Date.now() + 25892000000),
         httpOnly:true
     });


    if(!isMatch){
        res.status(400).json({error:"Invalid Credientials"});
    }
    else{
        res.json({message:"user signin Successfully"});
    }
}else{
res.status(400).json({error:"Invalid Credientials"})
}

    
} catch(err){console.log(err)}
});


//About Us Page

router.get('/about',authenticate,(req, res) => {
        console.log(`Hello my About`);
        res.send(req.rootUser);
    });

    // get user data for contact us and home page
    router.get('/getdata',authenticate,(req, res) => {
        console.log(`Hello my About`);
        res.send(req.rootUser);
    });


    router.post('/contact',authenticate,async(req, res) => {
        try{
            const {name,email,phone,message} = req.body;
            if(!name || !email || !phone || !message){
            console.log("error in contact form");
            return res.json({error:"plzz filled the contact form"});
            }
            const userContact = await User.findOne({ _id:req.userID});
            if(userContact){
                const userMessage = await userContact.addMessage(name, email, phone, message);
                
                await userContact.save();
                res.status(201).json({message:"user Contact successfully"})
                
            }}
            catch(error){
            console.log(error);
            }
        
    });


    // Logout Page
router.get('/logout',(req, res) => {
console.log(`Hello my logout Page`);
res.clearCookie('jwttoken',{path:'/'})
res.status(200).send(`User Logout`);
});

module.exports = router;