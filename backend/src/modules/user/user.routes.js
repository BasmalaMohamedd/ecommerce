import express from 'express'
import {loginUser, getAllUsers, deleteUser, registerUser, loginAdmin} from './user.controller.js'
import { checkEmail } from '../../utilities/middleware/checkEmail.js';


export const userRoutes = express.Router()
userRoutes.use(express.json());


const baseURL = '/users';

userRoutes.post(`${baseURL}/loginUser`, loginUser);
userRoutes.get(baseURL, getAllUsers);
// userRoutes.put(`${baseURL}/updateUser/:email`, updateUser);
userRoutes.delete(`${baseURL}/deleteUser/:email`, deleteUser);
userRoutes.post(`${baseURL}/registerUser`, checkEmail, registerUser);

const adminBaseURL = '/admin';
userRoutes.get(`${adminBaseURL}/:email`, loginAdmin);