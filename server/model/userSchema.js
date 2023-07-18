const mongoose = require('mongoose');
let user = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    }
})
let User =  mongoose.model("user" , user)
module.exports =User 