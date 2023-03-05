const { Schema, model }= require("mongoose");

const shoppingListSchema = new Schema(
    {
        userId:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        list:{
            type: Array,
            required: true
        }
});

const ShoppingList = model("ShoppingList", shoppingListSchema) 

module.exports= ShoppingList