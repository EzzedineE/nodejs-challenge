const express = require("express")
const router = express.Router();
const userCtrl = require('../controlors/users')

router.post('/', userCtrl.createUser);
router.delete('/:id', userCtrl.deleteUser);
router.put('/:id', userCtrl.modifyUser);
router.get('/:id', userCtrl.getOneUser);
router.get('/', userCtrl.getAllUser);
//
router.put('/addTodoToUser/:idu/:idt', userCtrl.addTodoUser);
router.put('/pullTodoToUser/:idu/:idt', userCtrl.deleteTodoUser);

module.exports = router