import mongoose from "mongoose"

export const dbConnection = mongoose.connect("mongodb://localhost:27017/Ecommerce_NTI")
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err));