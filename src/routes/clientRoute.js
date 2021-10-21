const { Router } = require('express')
const routes = new Router()
const ClientController = require('../controllers/clientController')

routes.get('/all', ClientController.get)

routes.post('/', ClientController.post)

routes.patch('/:id', ClientController.patch)

routes.delete('/:id', ClientController.delete)


module.exports = routes
