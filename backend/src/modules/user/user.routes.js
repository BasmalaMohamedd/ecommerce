import express from 'express'
import {loginUser, getAllUsers, updateUser, deleteUser, registerUser, loginAdmin} from './user.controller.js'


export const userRoutes = express.Router()
userRoutes.use(express.json());


const baseURL = '/users';

userRoutes.get(`${baseURL}/:email`, loginUser);
userRoutes.get(baseURL, getAllUsers);
userRoutes.put(`${baseURL}/updateUser/:email`, updateUser);
userRoutes.delete(`${baseURL}/deleteUser/:email`, deleteUser);
userRoutes.post(`${baseURL}/registerUser`, registerUser)
const adminBaseURL = '/admin'
userRoutes.get(adminBaseURL, loginAdmin);