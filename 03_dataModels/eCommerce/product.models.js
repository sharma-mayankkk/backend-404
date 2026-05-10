import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    description: {
        requierd: true,
        type: String,
    },

    name: {
        requierd: true,
        type: String,
    },

    productImage: {
        type: String,

    },

    price: {
        type: Number,
        default: 0,
    },
    
    stock: {
        type: Number,
        default: 0,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

}, { timestamps: true })

export const Product = mongoose.model('Product', productSchema)