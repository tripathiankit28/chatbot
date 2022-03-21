const mongoose = require('mongoose');

var chatBotSchema = new mongoose.Schema({
    question : {
        type: String
    },
    answer : {
        type : String
    }
    
});

module.exports=mongoose.model('response', chatBotSchema);
