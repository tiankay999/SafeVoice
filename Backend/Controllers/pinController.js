const Pin = require("../models/safetypin");
const bcrypt=require("bcrypt");

exports.addPin=async(req,res)=>{
    try {
        const {pin}=req.body;
        const hashedPin=await bcrypt.hash(pin,10);
        const savedPin=await Pin.create({
            user:req.userId,
            hashedPin,
        });
        
        res.status(201).json({success:true,message:"Pin added successfully",savedPin});

    } catch (error) {
        res.status(500).json({message:"Internal Server error"});
    }
}



exports.verifyPin=async(req,res)=>{
    try {
        const {pin}=req.body;
        const savedPin=await Pin.findOne({user:req.userId});
        if(!savedPin){
            return res.status(404).json({message:"Pin not found"});
        }
        const isPinValid=await bcrypt.compare(pin,savedPin.hashedPin);
        if(!isPinValid){
            return res.status(401).json({message:"Invalid pin"});
        }
        res.status(200).json({success:true,message:"Pin verified successfully",savedPin});
    } catch (error) {
        res.status(500).json({message:"Internal Server error"});
    }
}