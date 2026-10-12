const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    pin:{
        type:String,
        required:true,
    },
    
});

module.exports = mongoose.model("Pin", PinSchema);
