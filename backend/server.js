const express = require("express");
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const path = require('path');
const app = express();
dotenv.config();
app.use(bodyParser.json());
const PORT=process.env.PORT ||8070
app.use(bodyParser.json());
app.use(cors());



const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,

})

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Mongo DB Connection success");
})

app.route('/').get((req,res)=>{
    res.send('SLIIT SPM');
})

const RiderAPI = require('./API/Rider.Api.js')
app.use('/rider',RiderAPI())


app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
});

// mongodb login credentials
// email - kandycupcakes.sliit@gmail.com
//password :Abc123456789

