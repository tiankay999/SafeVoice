const User = require("../models/users");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

exports.signup = async (req, res) => {
    
    try {
        const { name, age, gender, phoneNumber, email, country, password } = req.body;
    if (!name || !age || !gender || !phoneNumber || !email || !country || !password) {
        res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({
            name,
            age,
            gender,
            phoneNumber,
            email,
            country,
            password,
        });
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.status(201).json({ success: true , message: "User created successfully",user ,token});
    } catch (error) {
        res.status(500).json({  message: "Internal Server  error" });
    }
}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid password" });
        }
        res.status(200).json({ success: true, message: "User logged in successfully", user ,token});
    } catch (error) {
        res.status(500).json({ message: "Internal Server error" });
    }
}

exports.UpdateProfile=async(req,res)=>{
    try {
        const {id}=req.params;
        const {name,age,gender,phoneNumber,email,country,password,emergencyContacts,profilePicture}=req.body;
        const user=await User.findByIdAndUpdate(id,{name,age,gender,phoneNumber,email,country,password,emergencyContacts,profilePicture},{
            new:true,
            runValidators:true
        });
        res.status(200).json({success:true,message:"Profile updated successfully",user});
    } catch (error) {
        res.status(500).json({message:"Internal Server error"});
    }
}

