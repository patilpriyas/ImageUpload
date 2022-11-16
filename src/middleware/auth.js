
const jwt =require("jsonwebtoken")

const authentication = async function(req,res,next){
    try{

    let token = req.headers["x-Api-key"]
    if(!token) { token= req.headers["x-api-key"] }
    if (!token) return res.status(401).send({ status: false, msg: "Token must be present" });

    let decodedToken = jwt.verify(token,"User-Application")
    if(!decodedToken) return res.status(401).send({ status : false, msg : "Token is Not Present"})

    req.decodedToken = decodedToken 
    req['userId']=decodedToken.userId
    next();

}catch(err)
{
res.status(500).send({ status: false, err : "Token is Invalid" })
}
}


module.exports.authentication = authentication