const Product = require("../model/product");
const User = require("../model/userSchema");
var jwt = require('jsonwebtoken');
let userdetail = async (req, res) => {
    // console.log("user", req.body);
    let { username, email, password, confirmpassword } = req.body
    let olduser = await User.findOne({ username: username })
    console.log("olduser", olduser);
    if (olduser !== null) {
        console.log("1");
        return res.json("user allready exists")
    }
    if (password !== confirmpassword) {
        return res.json("passwor is not match");
    }
    await User.create(req.body)

    res.json("done")
}
let login = async (req, res) => {
    let { username, password } = req.body
    let user = await User.findOne({ username: username })
    if (!user) {
        return res.json("user not found")
    }
    if (user.password !== password) {
        return res.json("password is incorrect")
    }
    console.log(user.id);
    let token = jwt.sign(user.id, process.env.SECRET)
    console.log(token);
    res.cookie("jwt", token);
    res.json(token)

}
let detail = async (req, res) => {
    console.log(req.cookies.jwt);
    let Token = jwt.verify(req.cookies.jwt, process.env.SECRET)
    let USER = await User.findById(Token)
    res.send(USER)
}
let logout = async (req, res) => {
    res.clearCookie('jwt');
    res.send("logout")
}
let productadd = async (req, res) => {
    let token = req.params.id
    console.log("token", token);
    let Token = jwt.verify(token, process.env.SECRET)
    // let Token = jwt.verify(req.cookies.jwt ,process.env.SECRET)
    let USER = await User.findById(Token)
    console.log(req.body);
    req.body.userID = USER.id
    await Product.create(req.body)
    res.json("done")
}
let allproduct = async (req, res) => {
    // console.log(req.cookies);
    let token = req.params.id
    console.log("token", token);
    let Token = jwt.verify(token, process.env.SECRET)
    console.log("token2", Token);
    let USER = await User.findById(Token)
    console.log("USER", USER);
    let Allproduct = await Product.find()
    res.send(Allproduct)
}
let myuser = async (req, res) => {
    let token = req.params.id;
    let Token = jwt.verify(token, process.env.SECRET)
    let USER = await User.findById(Token)
    res.send(USER)
}
let yourproduct = async (req, res) => {
    let token = req.params.id;
    let Token = jwt.verify(token, process.env.SECRET)
    let Allproduct = await Product.find({ userID: Token })
    console.log("Allproduct", Allproduct);

    res.send(Allproduct)
}
let productEdit = async (req, res) => {
    // let token = req.params.id;
    // let Token = jwt.verify(token ,process.env.SECRET)
    let { productname, img, productprice } = req.body
    if (!productname || !img || !productprice) {
        return res.json("All are required")

    }
    let Allproduct = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.json("done")

}
let productDelete = async(req,res)=>{
    console.log(req.params.id);
    await Product.findByIdAndDelete(req.params.id)
    res.json("Delete")

}
module.exports = { userdetail, login, detail, logout, productadd, allproduct, yourproduct, myuser, productEdit , productDelete}