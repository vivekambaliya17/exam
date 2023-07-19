const mongoose = require('mongoose');
let product = new mongoose.Schema({
    productname:{
        type:String,
    },
    productprice:{
        type:String,
    },
    img:{
        type:String,
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"user"
    }
})
let Product =  mongoose.model("product" , product)
module.exports =Product 