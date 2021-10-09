const { set } = require('mongoose')
const { findOneAndUpdate } = require('../models/tablecity')
const modelCity = require('../models/tablecity')


class CityController{
    async get (req,res){
        try {
            const city = await modelCity.find()
            return res.status(200).send(city)
            
        } catch (error) {
            return res.status(400).json({
                message:'Not found'
            })
        }
    }
    async post (req, res){
        try {
            const {name, state} = req.body
            const result = await modelCity.create({
                name:name,
                state:state,
            })
            return res.status(201).send(result)
        } catch (error) {
       return res.status(400).json({
                message:'No create city'
            })
        }
    }
    async patch(req,res){
        try {
            const {id} = req.params
            const{name, state} = req.body
            const filter = {_id:id}
            const update = {
                name:name,
                state:state
            }
            const result = await modelCity.findOneAndUpdate(filter, update, {
                 new:true,
                         
            }) 
            return res.status(201).send(result)
        } catch (error) {
            return res.status(400).json({
                message: 'não deu'
            })
        }

    }

} 


module.exports = new CityController()