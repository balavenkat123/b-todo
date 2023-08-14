const mongoose =require('mongoose')

const todoSchema = new mongoose.Schema({
    type: {
        type: String,
        require:true
    }
})
module.exports =mongoose.model('ToDo',todoSchema)