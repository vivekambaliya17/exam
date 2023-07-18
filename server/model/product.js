const mongoose = require('mongoose');
let product = new mongoose.Schema({
    productname:{
        type:String,
        require:true
    },
    productprice:{
        type:String,
        require:true
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"user"
    }
})
let Product =  mongoose.model("product" , product)
module.exports =Product 