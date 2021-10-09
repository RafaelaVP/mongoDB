const modelClient = require('../models/tableclient')


class ClientController{
    async get (req,res){
        try {
            const clients = await modelClient.find()
            return res.status(200).send(clients)
            
        } catch (error) {
            return res.status(400).json({
                message:'Not found'
            })
        }
    }
    async post (req, res){
        try {
            const {name,birthdate, gender} = req.body
            const result = await modelClient.create({
                name:name,
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
    async patch(req,res){
        try {
            const {id} = req.params
            const{name, birthdate, gender} = req.body
            const filter = {_id:id}
            const update = {
                name:name,
                birthdate:birthdate,
                gender:gender
            }
            const result = await modelClient.findOneAndUpdate(filter, update, {
                 new:true,                  
            }) 
            return res.status(201).send(result)
        } catch (error) {
            return res.status(400).json({
                message: 'não deu'
            })
        }

    }
    async delete(req,res){
        try {
            const {id} = req.params         
            const filter = {_id:id}
           
            const result = await modelClient.findOneAndDelete (filter, {
                 new:true,                  
            }) 
            return res.status(204).send()
        } catch (error) {
            return res.status(400).json({
                message: 'No delete'
            })
        }
    }

} 

module.exports = new ClientController()