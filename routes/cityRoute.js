const { Router } = require('express')
const routes = new Router()
const CityController = require('../controllers/cityController')

routes.get('/all',CityController.get)
routes.post('/',CityController.post)


module.exports = routes