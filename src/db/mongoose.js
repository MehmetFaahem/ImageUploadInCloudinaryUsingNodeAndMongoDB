const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

const database = mongoose.connection

database.on('error', (error)=>
    console.log(error)
)

database.once('connected', ()=>{
    console.log('🎁 You are connected to the server')
})