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

module.exports = router