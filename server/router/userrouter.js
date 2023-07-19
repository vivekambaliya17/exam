const express = require('express');
const { userdetail, login, detail, logout, productadd, allproduct, yourproduct, myuser, productEdit, productDelete } = require('../controller/controller');
let routes = express.Router()
routes.post('/userdetail',userdetail)
routes.post('/login',login)
routes.get('/detail',detail)
routes.get('/logout',logout)
routes.post('/productadd/:id',productadd)
routes.get('/allproduct/:id',allproduct)
routes.get('/yourproduct/:id',yourproduct)
routes.get('/myuser/:id',myuser)
routes.post('/productEdit/:id',productEdit)
routes.get('/productDelete/:id',productDelete)


module.exports = routes