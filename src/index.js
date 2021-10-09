const express = require('express')
const routeClient = require('../routes/clientRoute')
const routeCity = require('../routes/cityRoute')
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
        this.express.use('/search/city', routeCity)
        this.express.use('/search/city/client', routeClient)
    }
}
 module.exports = new Controller().express
