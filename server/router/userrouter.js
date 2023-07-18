const express = require('express');
const { userdetail } = require('../controller/controller');
let routes = express.Router()
routes.post('/userdetail',userdetail)


module.exports = routes