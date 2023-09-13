const express = require('express');
const bodyParser = require("body-parser")
require('dotenv').config()

const app = express();
const mongoose = require('mongoose')

var cors = require('cors')

 
app.use(cors())
//routes folder
const workoutRoutes = require('./routes/workouts');



//middleware
app.use(express.json())

app.use(bodyParser.json()); 
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('listening on port 4000!!!')
        })
    })
    .catch((error)=>{
        console.log(error)
    })
