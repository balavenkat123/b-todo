const {Router} = require("express")
const {getToDo,saveToDo} = require('../Controllers/ToDoControllers')
const route = Router();

route.get('/',getToDo)
route.get('./save',saveToDo)

module.exports =route