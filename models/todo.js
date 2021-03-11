const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoTaskesSchema = new Schema ({
    text : {
        type:String,
        required:true
    },
    time:{
        type:String,
    }

})

const Todo = mongoose.model('todo',TodoTaskesSchema)
module.exports= Todo
