const express = require('express');
const connection = require('./config/connection');
let app = express();
require('dotenv').config()
let port =  process.env.PORT || 6000;
app.use(express.json());
app.listen(port , ()=>{
    console.log(`localhost:${port}`);
    connection()
})