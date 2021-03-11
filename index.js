const express = require('express')
const  routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/todolist')
mongoose.Promise = global.Promise

app.use(express.static('public'))

app.use(bodyParser.json())
app.use('/api',routes)
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message})
})

app.listen(process.env.port || 4000,  ()=>{
    console.log("now listeninig nice")
})