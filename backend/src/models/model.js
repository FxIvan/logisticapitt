const {Schema,model} = require('mongoose')

const datosSchema = new Schema({
    emision:String,
    codenv:String,
    telclient:Number,
    correoargentino:Boolean,
    andreani:Boolean,
    pikit:Boolean,
    nigrum:Boolean,
    direccion:String,
    localidad:String,
    provincia:String
},
{
    timestamps:true
})

const dbDatos = model('datosPaquetes', datosSchema)

module.exports = dbDatos