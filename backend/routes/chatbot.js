var express=require('express');
var router = express.Router();
var chatbotcontroller = require('../controllers/chatbot');

router.post('/chatbot/data',chatbotcontroller.postData)
module.exports=router;