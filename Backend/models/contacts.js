const mongoose = require("mongoose");

const ContactsSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    contact:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Contact",
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    relationship:{
        type:String,
        required:true,
    },
    
});

module.exports = mongoose.model("Contact", ContactsSchema);