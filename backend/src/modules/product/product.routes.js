import express from 'express'


export const productRoutes = express.Router()
productRoutes.use(express.json());


const baseURL = '/products';

productRoutes.get(baseURL, getAllProducts);
productRoutes.get(`${baseURL}/:id`, getProductById);
productRoutes.put(`${baseURL}/updateproduct/:id`, updateproduct);
productRoutes.delete(`${baseURL}/deleteproduct/:id`, deleteProduct);
productRoutes.post(`${baseURL}/addProduct`, checkEmail, addProduct);
