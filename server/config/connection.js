const mongoose = require('mongoose');
require('dotenv').config()

let connection = async()=>{
    console.log("connecting");
   await mongoose.connect(process.env.DBCONNECT)
   console.log("connected");
}
module.exports = connection