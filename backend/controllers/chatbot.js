
const chatbot= require('../model/chatbot');
const chatbot1 = require('../model/chatbot1')

const postData= async (req,res)=>{
    try {
    const lData = req.body.response;
    // console.log(lData)
    
    const chatresponse1 = await chatbot.findOne({question:lData})
    // console.log(chatresponse1);
    const chatresponse2 = await chatbot1.findOne({serialNo:chatresponse1.serialNo})
    // console.log(chatresponse2)
    res.json({
        response:chatresponse2.answer
    })}
    catch(err){
        console.log(err);
    }
}
module.exports={
    postData
}
