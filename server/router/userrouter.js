const express = require('express');
const { userdetail, login, detail, logout, productadd } = require('../controller/controller');
let routes = express.Router()
routes.post('/userdetail',userdetail)
routes.post('/login',login)
routes.get('/detail',detail)
routes.get('/logout',logout)
routes.get('/productadd',productadd)
routes.get('/allproduct',allproduct)


module.exports = routes