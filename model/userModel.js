const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
            },
    password:{
        type:String,
        required:true

    },
    mobilenumber:{
        type:Number,
        required:true
    }
})

const reg=mongoose.model('register',RegisterSchema);

module.exports={reg}