import { model, Schema } from "mongoose";

const userSchema = new Schema({
    email: String,
    firstName: String, 
    lastName: String,
    gender:{
        type: String,
        enum: ['male', 'female'],
        default: 'male'
    },
    password: String,
    address: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isConfirmed: {
        type: Boolean,
        default: false
    }
}
)

export const userModel = model('User', userSchema);