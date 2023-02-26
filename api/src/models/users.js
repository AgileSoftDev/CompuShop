const { Schema, model }= require("mongoose");

const userSchema= new Schema(
    {
        userName:{
            type: String,
            required: true,
        },
        userCategory:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        wallet:{
            type: String,
            required: false,
        },
        phoneNumber:{
            type: Number,
        },
        isActive:{
            type: Boolean,
            default: true,
        },
        createdAt:{
            type: Date,
            default: Date.now,
        }
        
});

const User= model("User", userSchema) 

module.exports= User