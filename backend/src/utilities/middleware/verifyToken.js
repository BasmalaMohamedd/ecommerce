import jwt from 'jsonwebtoken'



export const verifyToken = (req, res, next )=>{

    jwt.verify(req.headers.token, "NTIG7", async(err, decoded)=>{
    if(err) return res.status(401).json({message:"invalid token"})

    req.decoded = decoded
    next()
        
})
}