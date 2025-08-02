import { productModel } from "../../../db/models/proeduct.model.js";

export const getAllProducts = async (req, res)=>{
    const products = await productModel.find();
    res.json({message: "Products: ", products});
    
}

export const getProductById = async (req, res)=>{
    const foundedProduct = await productModel.findById(req.params.id);
    foundedProduct? res.json({message: "founded product: ", products: foundedProduct}):
                    res.json({message: "product not found"});

    
}

export const updateproduct = async (req, res)=>{
    const foundedProduct = await productModel.findById(req.params.id);
    if(foundedProduct)
    {
        const updateproduct = {...foundedProduct, ...req.body};
        await productModel.findOneAndUpdate({_id: req.params.id}, {...updateproduct}, {returnDocument: "after"});
        res.json({message: "product updated: ", product: updateproduct});
    }
    
}

export const deleteProduct = async (req, res)=>{
    const deletedProduct = await productModel.findOneAndDelete({_id: req.params.id});
    if(deleteProduct)
    {
        res.json({message: "product deleted: ", product: deletedProduct});
    }
    else
    {
        res.json({message: "product not found"});
    }
    
}

export const addProduct = async (req, res)=>{
    console.log("addProduct");
    
}


