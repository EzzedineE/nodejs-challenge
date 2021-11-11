const express = require("express")
const router = express.Router();
const stuffCtrl = require('../controlors/todo.js')

router.post('/', stuffCtrl.createTodo);
router.delete('/:id', stuffCtrl.deleteTodo);
router.put('/:id', stuffCtrl.modifyTodo);
router.get('/:id', stuffCtrl.getOneTodo);
router.get('/', stuffCtrl.getAllTodo);


module.exports = router