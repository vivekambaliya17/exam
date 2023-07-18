const express = require('express');
var jwt = require('jsonwebtoken');
const connection = require('./config/connection');
var cookieParser = require('cookie-parser')

const routes = require('./router/userrouter');
require('dotenv').config()
var cors = require('cors')
let port =  process.env.PORT || 6000;
let app = express();
app.use(cookieParser())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extends:true}))
app.use('/',routes)
app.listen(port , ()=>{
    console.log(`localhost:${port}`);
    connection()
})