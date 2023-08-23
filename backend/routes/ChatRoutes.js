const express = require('express');
const router = express.Router() 
const {createPerson , getPerson , createSms,getOnePerson} = require('../controllers/controller')


router.get('/',getPerson)
router.post('/',createPerson)

router.patch('/sms/:id',createSms)
router.get('/:id',getOnePerson)

module.exports=router 