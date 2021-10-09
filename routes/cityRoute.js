const { Router } = require('express')
const routes = new Router()
const CityController = require('../controllers/cityController')

routes.get('/',CityController.get)

routes.post('/',CityController.post)

routes.patch('/:id', CityController.patch)


module.exports = routes