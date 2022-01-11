require('dotenv').config()
const mongoose = require('mongoose')

const  MONGO_URI= `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.om4w0.mongodb.net/${process.env.MONGO_NAMEDB}?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI , {useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexion Establecida')
    })
    .catch(err=>{
        console.log("Error en la conexion:", err)
    })