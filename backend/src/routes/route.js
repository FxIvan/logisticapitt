const {Router} = require('express')
const router = Router()
const datosEnvios = require('../models/model')

router.route('/')
.get(async(req,res)=>{
    const pedidoDatos = await datosEnvios.find()
    res.json(pedidoDatos)
})
.post(async(req,res)=>{ //armamos el POST que enviamos por axios
    const {emision,codenv,telclient,correoargentino,andreani,pikit,nigrum,direccion,localidad,provincia,repartidor} = req.body

    const newDatos = new datosEnvios({
        emision:emision,
        codenv:codenv,
        telclient:telclient,
        correoargentino:correoargentino,
        andreani:andreani,
        pikit:pikit,
        nigrum:nigrum,
        direccion:direccion,
        localidad:localidad,
        provincia:provincia,
        repartidor:repartidor
    })

    await newDatos.save()
    res.json({message:'Datos Enviados correctamente'})
})

router.route('/:id')
.get(async(req,res)=>{
    const datosPedidos = await datosEnvios.findById(req.params.id)
    res.json(datosPedidos)
})
.delete(async(req,res)=>{
    await datosEnvios.findByIdAndDelete(req.params.id)
    res.json({message:'Elemento Eliminado Correctamente'})
})

module.exports = router