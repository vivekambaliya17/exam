const mongoose = require('mongoose');
require('dotenv').config()

let connection = async()=>{
   try {
    console.log("connecting");
    await mongoose.connect(process.env.DBCONNECT)
    console.log("connected");
   } catch (error) {
    console.log(error);
   }
}
module.exports = connection