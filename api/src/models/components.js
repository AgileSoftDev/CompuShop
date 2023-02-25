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
        description_2:{
            type: String
        },
        description_3:{
            type: String
        },
        description_4:{
            type: String
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
        }
    }
);

const Components = model("Components", componentSchema)

module.exports= Components