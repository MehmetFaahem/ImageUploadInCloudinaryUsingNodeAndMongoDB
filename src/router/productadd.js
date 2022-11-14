const express = require('express')
const router = new express.Router()
const Product  = require('../models/product')

const upload = require('../middleware/upload')
const {uploadToCloudinary, removeFromCloudinary} = require('../cloudinary')

router.post('/add',upload.single('image'), async (req, res, next)=>{
    try{
        const data = await uploadToCloudinary(req.file.path, 'product-images')
        const product = new Product({
            name: req.body.name,
            imageUrl: data.url,
            publicId: data.public_id
        })
        await product.save()
        res.status(201).send(product)
    }catch(error){
        res.status(40).send(error)
    }
})

router.post('/imageUpload/:id', upload.single('image'), async (req, res)=>{
    try{
        const data = await uploadToCloudinary(req.file.path, 'product-images')
    const withImage = await Product.updateOne(
        {_id: req.params.id},
        {
            $set:{
                imageUrl: data.url,
                publicId: data.public_id
            }
        }
    )
    res.status(200).send('Image Uploaded')
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = router