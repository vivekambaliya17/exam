const Product = require("../model/product");
const User = require("../model/userSchema");
var jwt = require('jsonwebtoken');
let userdetail =async(req,res)=>{
    // console.log("user", req.body);
    let {username ,email,password,confirmpassword} = req.body
    let olduser =await User.findOne({username:username})
    console.log("olduser",olduser);
    if(olduser !== null){
        console.log("1");
        return res.json("user allready exists")
    }
    if(password !== confirmpassword){
        return res.json("passwor is not match");
    }
    await User.create(req.body)
   
    res.json("done")
}
let login = async (req, res) => {
    let {username, password} =req.body
    let user = await User.findOne({username:username})
    if(!user){
        return res.json("user not found")
    }
    if(user.password !== password){
        return res.json("password is incorrect")
    }
    console.log(user.id);
    let token = jwt.sign(user.id,process.env.SECRET)
    console.log(token);
    res.cookie("jwt", token);
    res.json("done")

}
let detail = async(req,res)=>{
    console.log(req.cookies.jwt);
    let Token = jwt.verify(req.cookies.jwt ,process.env.SECRET)
    let USER = await User.findById(Token)
    res.send(USER)
}
let logout = async(req,res)=>{
    res.clearCookie('jwt');
    res.send("logout")
}
let productadd = async(req,res)=>{
    let Token = jwt.verify(req.cookies.jwt ,process.env.SECRET)
    let USER = await User.findById(Token)
    console.log(req.body);
    req.body.userID = USER.id
    await Product.create(req.body)
    res.send("productadd")
}
let allproduct = async(req, res) => {
    console.log(req.cookies);
    let Token = jwt.verify(req.cookies.jwt ,process.env.SECRET)
    let USER = await User.findById(Token)
    console.log("USER",Token);
    let Allproduct = await Product.find()
    res.send(Allproduct)
}
let yourproduct = async(req, res) => {
    let Allproduct = await Product.find()
    console.log(Allproduct.userID);
    
    res.send(Allproduct)
}
module.exports ={userdetail ,login , detail , logout , productadd ,allproduct , yourproduct}