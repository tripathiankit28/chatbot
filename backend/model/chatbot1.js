const mongoose = require('mongoose');

var chatBotSchema = new mongoose.Schema({
    answer : {
        type: String
    },
    serialNo : {
        type : Number
    }
    
});

module.exports=mongoose.model('answers', chatBotSchema);
