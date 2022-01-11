const express = require('express')
const app = express()
const cors = require('cors')

app.set('port', process.env.PORT || 4000)

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Estas conectado Correctamente, este es la carpeta de app.js')
})

app.use('/datospaquetes', require('./routes/route'))

module.exports = app