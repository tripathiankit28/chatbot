
const chatbot= require('../model/chatbot.model');

const postData= async (req,res)=>{
    try {
    const data = req.body.response;
    const chatresponse = await chatbot.findOne({question:data})
    res.json({
        response:chatresponse.answer
    })}
    catch(err){
        console.log(err);
    }
}
module.exports={
    postData
}
