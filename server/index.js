const express = require('express');
const connection = require('./config/connection');
const routes = require('./router/userrouter');
require('dotenv').config()
var cors = require('cors')
let port =  process.env.PORT || 6000;
let app = express();
app.use(cors())
app.use(express.json());
app.use('/',routes)
app.listen(port , ()=>{
    console.log(`localhost:${port}`);
    connection()
})