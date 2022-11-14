const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publicId:{
        type: String
    },
    imageUrl:{
        type: String,
        required: false
    }
}, {timestamps: true})

const Product = mongoose.model('ProductList', productSchema)

module.exports = Product