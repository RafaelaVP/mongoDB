const mongoose = require('mongoose');
require('dotenv').config()

 const connection = async function main() {
    await mongoose.connect(
        process.env.DATABASE
    );
  } 
  console.log('conectado ao banco')

module.exports = connection


