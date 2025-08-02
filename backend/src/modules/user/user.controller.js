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

export const updateUser = ()=>{
    console.log("update user");
    
}

export const deleteUser = ()=>{
    console.log("delete user");
    

}


export const loginAdmin = ()=>{

}

export const loginUser = ()=>{
    console.log("login user");
}