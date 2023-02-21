const { Schema, model }= require("mongoose");

const componentSchema= new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        category:{
            type: String,
        },
        description:{
            type: String,
            required: true,
        },
        img:{
            type: String,
        },
        maker:{
            type: String,
        }
    }
);

const Components = model("Components", componentSchema)

module.exports= Components