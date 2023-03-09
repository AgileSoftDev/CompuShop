const { Schema, model }= require("mongoose");

const reviewSchema = new Schema(
    {
        email:{
            type: String,
            required: true,
        },
        score:{
            type: Number,
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