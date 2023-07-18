const express = require('express');
const { userdetail, login, detail, logout, productadd, allproduct, yourproduct } = require('../controller/controller');
let routes = express.Router()
routes.post('/userdetail',userdetail)
routes.post('/login',login)
routes.get('/detail',detail)
routes.get('/logout',logout)
routes.post('/productadd',productadd)
routes.get('/allproduct',allproduct)
routes.get('/yourproduct',yourproduct)


module.exports = routes