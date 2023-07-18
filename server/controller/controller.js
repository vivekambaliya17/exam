let userdetail =async(req,res)=>{
    let {name ,email,password,confirmpassword} = req.body
    console.log(req.body);
    res.send("done")
}
module.exports ={userdetail}