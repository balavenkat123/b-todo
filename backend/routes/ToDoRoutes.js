const {Router} = require("express")
const {getToDo,saveToDo,updateTo,deletedTo} = require('../Controllers/ToDoControllers')
const route = Router();

route.get('/',getToDo)
route.post('./save',saveToDo)
route.post('./update',updateTo)
route.post('./delete',deletedTo)

module.exports =route