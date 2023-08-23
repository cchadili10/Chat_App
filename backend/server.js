const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const ChatRoutes = require('./routes/ChatRoutes')


const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
 
app.use(cors(corsOptions))


app.use(express.json())

app.use('/api/chat' , ChatRoutes) 



//cnx to data base
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('good')
        })
    })