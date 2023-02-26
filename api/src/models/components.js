const { Schema, model }= require("mongoose");

const componentSchema= new Schema(
    {
        manufacturer:{
            type: String,
        },
        name:{
            type: String,
            required: true,
        },
        category:{
            type: String,
        },
        price:{
            type: Number,
            required: true,
        },
        img:{
            public_id: {
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        },
        maker:{
            type: String,
        },
        stock:{
            type: Boolean,
            required: true
        },
        quantityStock:{
            type: Number,
            required: true
        },
        comments: []
    }
);

const Components = model("Components", componentSchema)

module.exports= Components