const { Router } = require('express')
const routes = new Router()
const ClientController = require('../controllers/clientController')

routes.get('/all', ClientController.get)
routes.post('/', ClientController.post)


module.exports = routes
