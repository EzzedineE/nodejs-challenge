const express = require("express")
const router = express.Router();
const emailCtrl = require('../controlors/emailCtrl')

router.post('/text', emailCtrl.sendtext);
router.post('/html', emailCtrl.sendhtml);
router.post('/attachement', emailCtrl.sendAttachment);
router.post('/ejs/:nom/:prenom', emailCtrl.sendEjs);


module.exports = router