const {Router} = require("express")
const route = Router();

route.get('/',(req,res) =>{
    res.json({message : "hello bro....."})
})

module.exports =route