const mongoose = require('mongoose');
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number,
    
    id:String,
    urlSlug:String,
    namePrefix:String,
    firstName:String,
    lastName:String,
    aboutMe:String,
    profliePicUrl:String,
    experience:String,
    languages:Array,
    minimumCallDuration:Number,
    minimumCallDurationCharges:Number,
    additionalPerMinuteCharges:Number,
    isAvailable:String,
     rating:String,
    skills:Array,
    isOnCall:String,
    availability:Object
     
 });
 module.exports = mongoose.model('User', userSchema);
