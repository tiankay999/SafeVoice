const Contact=require("../models/contacts");

exports.addContact=async(req,res)=>{
    try {
        const {name,phoneNumber,email,relationship}=req.body;
        const contact=await Contact.create({
            user:req.userId,
            name,
            phoneNumber,
            email,
            relationship,
        });
        res.status(201).json({success:true,message:"Contact added successfully",contact});
    } catch (error) {
        res.status(500).json({message:"Internal Server error"});
    }
}


exports.getContact=async(req,res)=>{
    try {
        const {id}=req.params;
        const contact=await Contact.findById(id);
        if(!contact){
            return res.status(404).json({message:"Contact not found"});
        }
        res.status(200).json({success:true,message:"Contact fetched successfully",contact});
    } catch (error) {
        res.status(500).json({message:"Internal Server error"});
    }
}


