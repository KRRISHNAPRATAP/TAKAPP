const mongoose = require('mongoose');
const questionSchema = new Schema({
    
        httpStatus:String,
        httpStatusCode:Number,
        success:Boolean,
        message:String,
        apiName:String,
        data:{
            id: Number,
            name: String,
            description: String,
            price: Number,
            suggestions: String,
        },
    }
);
module.exports = mongoose.model('Question', questionSchema);
