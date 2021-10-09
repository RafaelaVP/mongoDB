const connectiondb = require('../database/connect')
const mongoose = require('mongoose') 

  const city = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        reuire: true,

    },
    createdAt : {
        type: Date,
        default: Date.now,
    }
    
    })
    
    module.exports = city.model('city' , city)
