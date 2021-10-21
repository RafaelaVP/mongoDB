const { set } = require('mongoose')
const { findOneAndUpdate } = require('../schemas/schemacity')
const modelCity = require('../schemas/schemacity')


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
            if (typeof state ==="string" && state.length === 2 ){
                console.log('deu');
             } else{
                 console.log("não é string e tem que ter tamanho de 2 caracteres")
                } 
           // if (typeof name ==="string" >= name.length === 3){
                //console.log('ok')
           // }else{
              //  console.log("não é string e tem menos de 3 caracteres")
           // }
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
    async delete(req,res){
        try {
            const {id} = req.params         
            const filter = {_id:id}
           
            const result = await modelCity.findOneAndDelete  (filter, {
                 new:true,                  
            }) 
            return res.status(204).send()
        } catch (error) {
            return res.status(400).json({
                message: 'No delete'
            })
        }
    }
    async getId(req,res){
        try {
            const{id} = req.params
            const filter = {_id:id}
     
            const city = await modelCity.findOne(filter,{
                new:true,
            })
            return res.status(200).send(city)
        } catch (error) {
            return res.status(404).json({
                message:'not found'
            })
            
        }
    }

} 


module.exports = new CityController()