const { Schema, model }= require("mongoose");

const usersSchema= new Schema(
    {
        name:{
            type: String,
            required: false,
        },
        nickname:{
            type: String,
            required: true,
        },
        isAdmin:{
            type: Boolean,
            default: false,
        },
        email:{
            type: String,
            required: true,
        },
        wallet:{
            type: String,
            required: false,
        },
        phoneNumber:{
            type: Number,
            required: false,
        },
        isActive:{
            type: Boolean,
            default: true,
        },
        created_at:{
            type: Date,
            default: Date.now,
        },
        updated_at:{
            type: Date,
        },
        userid:{
            type: String
        },
        addresses:{
            type: Array,
            required: false,
        },
        orders:{
            type: Array,
            required: false,
        }
        
});

const User= model("Users", usersSchema) 

module.exports= User