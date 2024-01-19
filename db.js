const mongoose = require('mongoose');
require('dotenv').config();


async function dbconnection(){
    try{
        mongoose.connect(process.env.DB_URL)
        console.log("Connected to mongodb successfully");
    }catch(err){
        console.log(err.message);
    }
}

module.exports = { dbconnection}