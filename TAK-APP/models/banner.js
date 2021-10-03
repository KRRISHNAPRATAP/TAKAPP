const mongoose = require('mongoose');
const bannerSchema = new Schema({
    httpStatus:String,
    httpStatusCode:Number,
    success:String,
    message:String,
    apiName:String,
     data: {
        id: Number,
        name: String,
        landingUrl: String,
        orderType: String,
        metaData: {
            productCode: String,
            productName: String,
            professionalSlug: String,
        },
        images: {
            medium: {
                imageUrl: String,
                id: Number,
            }
        }
    },
    data : {
        id: Number,
        name: String,
        landingUrl: String,
        orderType: String,
        metaData: {
            productCode: String,
         productName: String,
         professionalSlug: String,
        },
        images: {
            medium:{
                imageUrl: string,
                id: number,
             }
        },
    }
    
 });
 module.exports = mongoose.model('b', bannerSchema);