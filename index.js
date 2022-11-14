const express = require('express')
require('./src/db/mongoose')
require('dotenv').config()
const productRouter = require('./src/router/productadd')

const app = express()

const port = process.env.port
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));

app.use('/api',productRouter)


app.listen(port, ()=>{
    console.log(`Your server is running on ${port}`);
})
