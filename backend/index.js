const express = require('express')
const app = express()
const port = 3000


//===============================Users=============================
const loginUser = ()=>{

}

const getAllUsers = ()=>{

}

const updateUser = ()=>{

}

const deleteUser = ()=>{

}

const registerUser = ()=>{

}


//===============================Products=============================

const getAllProducts = ()=>{

}

const getProductByTitle = ()=>{
    
}

const getProductById = ()=>{

}

const deleteProduct = ()=>{

}

const updateProduct = ()=>{

}

const decrementQuatityBy = ()=>{

}

const incrementQuatityBy = ()=>{

}

//===============================Carts=============================
const addCart = ()=>{

}

const getCart = ()=>{

}

const addProductToCart = ()=>{

}

const emptyCart = ()=>{

}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


