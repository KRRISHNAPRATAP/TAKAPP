const mongoose = require('mongoose');
const reportSchema = new Schema({
    
        "httpStatus":"OK",
        "httpStatusCode":200,
        "success":true,
        "message":"Services fetched successfully.",
        "apiName":"Get all services.",
        "data":{
           "services":[
              {
                 "name":"Horoscope",
                 "productCode":"HS",
                 "imageUrl":"horoscope.webp",
                 "description":"In-depth Horoscope will give you detailed life prediction reports and remedieson everything going to happen in 25 years of your life.",
                 "availableLanguages":[
                    
                 ],
                 "indepthPoints":[
                    
                 ],
                 "price":"251",
                 "offerPrice":"51"
              }
           ]
        }
    });
    module.exports = mongoose.model('Report', reportSchema);