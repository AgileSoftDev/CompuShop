const { Schema, model }= require("mongoose");

const reviewSchema = new Schema(
    {
        userId:{
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
        componentId:{
            type: String,
            required: true
        }
});

const Review= model("Review", reviewSchema) 

module.exports= Review