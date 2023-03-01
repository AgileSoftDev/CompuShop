const { Schema, model }= require("mongoose");

const reviewSchema = new Schema(
    {
        user:{
            type: String,
            required: true,
        },
        userCategory:{
            type: String,
            required: true,
        },
        review:{
            type: String,
            required: true,
        },
        date:{
            type: String,
            required: true
        }
});

const Review= model("Review", reviewSchema) 

module.exports= Review