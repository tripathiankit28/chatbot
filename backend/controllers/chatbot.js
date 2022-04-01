
const chatbot= require('../model/chatbot');
const chatbot1 = require('../model/chatbot1')


const postData= async (req,res)=>{
    
    try {
    const lData = req.body.response;
    var ans1 = lData.indexOf("hi");
    
    if(ans1!=-1){
        var no = 1;
    }
    var ans1 = lData.indexOf("bye");
    
    if(ans1!=-1){
        var no = 2;
    }    
    var ans1 = lData.indexOf("who");
    
    if(ans1!=-1){
        var no = 3;
    }    var ans1 = lData.indexOf("do");
    
    if(ans1!=-1){
        var no = 4;
    }        

    const chatresponse2 = await chatbot1.findOne({serialNo:no})
     console.log(chatresponse2)
    
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
