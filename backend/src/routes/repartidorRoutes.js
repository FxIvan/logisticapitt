const {Router} = require('express');
const router = Router()
const datosEnvios =  require('../models/model')

router.route('/')
.get(async(req,res)=>{
    const datoUsuario = await datosEnvios.find()
    res.json(datoUsuario)
})


router.route('/:repartidor')
.get(async(req,res)=>{
    await datosEnvios.find({repartidor:`${req.params.repartidor}`}) //Filtramos todos lo elementos que tenga asignado el mismo repartidor
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router