require('dotenv').config()
const app = require('./app')
require('./database')

async function Main(){
    await app.listen(process.env.PORT || 3000)
    console.log("Esuchando por el Puerto:" , app.get('port'))
}

Main()
