require('dotenv').config()
const app = require('./app')
require('./database')

async function Main(){
    await app.listen(app.get('port'))
    console.log("Esuchando por el Puerto:" , app.get('port'))
}

Main()
