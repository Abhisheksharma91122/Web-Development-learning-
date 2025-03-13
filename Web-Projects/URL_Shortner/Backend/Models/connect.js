const mongoose = require("mongoose");
require("dotenv").config();

const MOngo_url = process.env.MONGO_CONNECT;


mongoose.connect(MOngo_url)
    .then(()=>{
        console.log("Mongodb connected...");
    }).catch((error)=>{
        console.log("Error in connecting to mongodb are : ", error)
    })
