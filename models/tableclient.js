const connectiondb = require('../database/connect')
const mongoose = require('mongoose') 

const Client = mongoose.Schema({
    name: {
      type: String,
      require: true
    },
    birthcity: {
      type: String,
      require: true
    },
    gender: {
      type: String,
      require: true
    },
    bithdate: {
      type: String,
      require: true
    }
  }, {
    timestamps: true
  })
  
  module.exports = mongoose.model('client', Client)
