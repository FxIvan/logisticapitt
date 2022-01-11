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
    provincia:String,
    repartidor:String
},
{
    timestamps:{createdAt:false, updatedAt:true}
})

const dbDatos = model('datosPaquetes', datosSchema)

module.exports = dbDatos