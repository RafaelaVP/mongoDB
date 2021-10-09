const express = require('express')
const routeClient = require('../routes/clientRoute')
require('../database/connect')

class Controller {
    constructor() {
        this.express = express()
        this.middleware()
        this.routes()
    }
    middleware(){
        this.express.use(express.json())
    }
    routes(){
        this.express.use('/', routeCity)
        this.express.use('/client', routeClient)
    }
}
 module.exports = new Controller().express
