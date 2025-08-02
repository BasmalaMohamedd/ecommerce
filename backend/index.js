import express from 'express'
import { dbConnection } from "./db/dbConnection.js";
import { userRoutes } from "./src/modules/user/user.routes.js";


// //===============================Products=============================

// const getAllProducts = ()=>{

// }

// const getProductByTitle = ()=>{
    
// }

// const getProductById = ()=>{

// }

// const deleteProduct = ()=>{

// }

// const updateProduct = ()=>{

// }

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
app.use(userRoutes)


 app.listen(3000, ()=>{
    console.log("server running");
    
 })

