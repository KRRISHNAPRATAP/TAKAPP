const mongoose = require('mongoose');
const horoscopeSchema = new Schema({


httpStatus:String,
httpStatusCode:Number,
success:Boolean,
message:String,
apiName:String,
data: {
    name: String,
    date: String,
    img:String,
    images: {
        small: {
            imageUrl: String,
            id: Number,
        },
        large: {
            imageUrl: String,
            id: Number,
        },
        medium: {
            imageUrl: String,
            id: Number,
        },
    },
    urlSlug: String,
}
});
module.exports = mongoose.model('h', horoscopeSchema);