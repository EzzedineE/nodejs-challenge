const express = require("express")
const router = express.Router();
const userCtrl = require('../controlors/users')
const passport = require('passport')
router.post('/', userCtrl.createUser);
router.delete('/:id', userCtrl.deleteUser);
router.put('/:id', userCtrl.modifyUser);
// chalange 8
router.get('/profil', passport.authenticate('bearer', { session: false }), userCtrl.profil);

router.get('/:id', userCtrl.getOneUser);
router.get('/', userCtrl.getAllUser);

//
router.put('/addTodoToUser/:idu/:idt', userCtrl.addTodoUser);
router.put('/pullTodoToUser/:idu/:idt', userCtrl.deleteTodoUser);


module.exports = router