const express=require('express')
const router=express.Router();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/user.js')

router.post('/register',async(req,res)=>{
    const{username,email,password}=req.body;
    try{
        //checking if user exists
        let user=await User.findOne({email});
        if(user){
            return res.status(400).json({msg:'USER ALREADY EXISTS'})
        }
        //create new user
        user =new User({username,email,password});
        //Hash password
        const salt=await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(password,salt);
        //save user to database
        await user.save;
        res.status(201).json({msg:'User registerd successfully'})
    }
    catch(err){
        console.error(err.message)
        res.status(500).send('server error')
    }
});

//login route
router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
        //check if user exists
        let user= await User.findOne({email})
        if(!user){
            return res.status(400).json({msg:'invalid credentials'});
        }
        //validate password
        const isMatch= await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({msg:'invalid credentials'})
        }
        //create and return JWT token
        const payload={
            user:{
                id:user.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600},(err,token)=>{
            if(err) throw err;
            res.join({token})
        })
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})
module.exports=router;