const mongoose =require('mongoose')

const todoSchema = new mongoose.Schema({
    type: {
        type: String,
        require:true
    }
})
model.exports =mongoose.model('ToDo',todoSchema)