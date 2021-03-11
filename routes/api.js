const express = require('express')
const router = express.Router()

const Todo = require('../models/todo')

router.get('/main', (req, res) => {
   Todo.find({}).then((todos)=>{
       res.send(todos)
   })
})


router.post('/main', (req, res,next) => {
    Todo.create(req.body).then((todo) => {

        res.send(todo)
    }).catch(next)
}) 




router.put('/main/:id', (req, res) => {
    Todo.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Todo.findOne({_id:req.params.id}).then((todo)=>{
            res.send(todo)

        })
    })

})


router.delete('/main/:id', (req, res,next) => {
    Todo.findByIdAndRemove({_id:req.params.id}).then(function(todo){
        res.send(todo)
    })

})

module.exports = router
// "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe"