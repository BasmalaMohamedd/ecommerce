import { userModel } from "../../../db/models/user.model.js"



export const checkEmail =async(req, res, next)=>{

        const exist = await userModel.findOne({email:req.body.email})
         if(exist) return res.json({message:"User Already Registered, Please Login "})
           next() 

}