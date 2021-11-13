const express = require("express")
const router = express.Router();
const uploadCtrl = require('../controlors/uploadCtrl')

router.post('/single', uploadCtrl.uploadSingle);
router.post('/arry', uploadCtrl.uploadArry);


module.exports = router