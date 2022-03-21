var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var chatbotrouter= require('./routes/chatbot');

mongoose.connect('mongodb://localhost:27017/chatbot', { useNewUrlParser: true},(err)=>{
    if(!err) {
        console.log('MongoDB connection Succeeded')}
    else{
        console.log('Error in MongoDB connection')}

    }    
    
);

var app = express();
app.use(bodyparser.urlencoded({
    extended :true
}));
app.use(bodyparser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/',chatbotrouter);
app.listen(3000, () => {
    console.log('Express server started  at port : 3000');

});
