const modelClient = require('../models/tableclient')


class ClientController{
    async get (req,res){
        try {
            const clients = await modelClient.findAll()
            return res.status(200).send(clients)
            
        } catch (error) {
            return res.status(400).json({
                message:'Not found'
            })
        }
    }
    async post (req, res){
        try {
            const {name, birthcity, birthdate, gender} = req.body
            const result = await modelClient.create({
                name:name,
                birthcity:birthcity,
                birthdate:birthdate,
                gender:gender,
            })
            return res.status(201).send(result)
        } catch (error) {
            return res.status(400).json({
                message:'No create client'
            })
        }
    }

} 


module.exports = new ClientController()