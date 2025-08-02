import express from 'express'
import { dbConnection } from "./db/dbConnection.js";
import { userRoutes } from "./src/modules/user/user.routes.js";
import { productRoutes } from './src/modules/product/product.routes.js';


// //===============================Products=============================

// const decrementQuatityBy = ()=>{

// }

// const incrementQuatityBy = ()=>{

// }

// //===============================Carts=============================
// const addCart = ()=>{

// }

// const getCart = ()=>{

// }

// const addProductToCart = ()=>{

// }

// const emptyCart = ()=>{

// }



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const app = express();
dbConnection;
app.use(userRoutes);
app.use(productRoutes);


 app.listen(3000, ()=>{
    console.log("server running");
    
 })

