const Product = require("../model/product");
const User = require("../model/userSchema");
var jwt = require('jsonwebtoken');
let userdetail =async(req,res)=>{
    let {username ,email,password,confirmpassword} = req.body
    let olduser =await User.findOne({username:username})
    if(!olduser){
        return res.send("user allready exists")
    }
    if(password !== confirmpassword){
        return res.send("passwor is not match");
    }

    await User.create(req.body)
    console.log(req.body);
    res.send("done")
}
let login = async (req, res) => {
    let {username, password} =req.body
    let user = await User.findOne({username:username})
    if(!user){
        return res.send("user not found")
    }
    if(user.password !== password){
        return res.send("password is incorrect")
    }
    console.log(user.id);
    let token = jwt.sign(user.id,process.env.SECRET)
    console.log(token);
    res.cookie("jwt", token);
    res.send("done")

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
let allproduct = 
module.exports ={userdetail ,login , detail , logout , productadd}