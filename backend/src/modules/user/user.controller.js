import { userModel } from "../../../db/models/user.model.js"
import bcrypt from 'bcrypt'
import { sendMail } from "../../utilities/email/sendMail.js";

// //===============================Users=============================


export const getAllUsers = async(req, res)=>{
    const users = await userModel.find();
    res.json({message: "Users: ", users});
    
}


export const registerUser = async(req, res)=>{
    const salt = 8;
    const hashed = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hashed;
    const addedUser = await userModel.insertOne(req.body);
    addedUser.password = undefined;
    sendMail(req.body.email);
    res.json({message: "Registered user: ", addedUser});

}


export const deleteUser = async(req, res)=>{
    const deletedUser = await userModel.findOneAndDelete({email: req.params.email});
    res.json({message: "User deleted: ", deletedUser});

}


export const loginUser = async(req, res)=>{
    const foundedUser = await userModel.findOne({email: req.body.email})
    if(foundedUser){
        const match = bcrypt.compareSync(req.body.password, foundedUser.password);
        match ? res.json({message: "user logged in: ", user: foundedUser}): res.json({message: "wrong email or password"});

    }
    else{
        res.json({message: "wrong email or password"});
    }

}


export const loginAdmin = async(req, res)=>{
    const foundedAdmin = await userModel.find({email: req.body.email, role: "admin"})
    const match = bcrypt.compareSync(req.body.password, foundedAdmin.password);
    if(foundedAdmin && match)
    {
        res.json({message: "admin logged in: ", user: user});

    }
    else
    {
        res.json({message: "wrong email or password"});
    }
}



// export const updateUser = async(req, res)=>{
//     const foundedUser = await userModel.findOne({email: req.params.email});
//     if(foundedUser)
//     {
//         const updatedUser = {...foundedUser, ...req.body.email};
//         await userModel.findOneAndUpdate({email: req.params.email}, {...updateUser}, {returnDocument: "after"});
//         res.json({message: "user updated: ", user: updatedUser});
//     }
// }