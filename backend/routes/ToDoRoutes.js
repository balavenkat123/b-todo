const {Router} = require("express")
const {getToDo,saveToDo,updateTo,deletedTo} = require('../Controllers/ToDoControllers')
const route = Router();

route.get('/',getToDo)
route.get('./save',saveToDo)
route.get('./update',updateTo)
route.get('./delete',deletedTo)

module.exports =route