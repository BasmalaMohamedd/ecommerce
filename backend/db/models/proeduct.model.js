import { model, Schema } from "mongoose";

const productSchema = new Schema({
    _id: double,
    title: String,
    itemPrice: double, 
    description: String,
    image: String,
    quantity: int,
    category: String
}
)

export const productModel = model('Product', productSchema);