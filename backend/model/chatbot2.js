const mongoose = require('mongoose');

var chatBotSchema = new mongoose.Schema({
    question : {
        type: String
    },
    serialNo : {
        type : Number
    }
    
});

module.exports=mongoose.model('questions', chatBotSchema);
