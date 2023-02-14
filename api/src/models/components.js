const { DataTypes }= require("sequelize");
module.exports= (sequelize)=>{
    sequelize.define('components',{
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        description:{
            type: DataTypes.STRING,
        },
        type:{
            type: DataTypes.STRING,
            allowNull:false
        },
        img:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{createdAt: false,
        updateAt: false,
    })
};