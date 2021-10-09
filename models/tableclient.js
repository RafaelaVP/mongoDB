const connectiondb = require('../database/connect')
const mongoose = require('mongoose') 

  const client = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    
    birthcity: {
        type: String,
        require:true
    },
    gender: {
        type: String,
        require:true
    },
    bithdate : {
        type: String,
        require: true

    },
    
    createdAt : {
        type: Date,
        default: Date.now,
    }
    
    })
    console.log(client)

    module.exports = client.model('client' , client)
