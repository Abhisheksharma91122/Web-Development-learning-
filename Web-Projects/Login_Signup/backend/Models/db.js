const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log("Mongodb connected... ");
    }).catch((err)=>{
        console.log("Error in connecting to mongodb are : ", err);
    })