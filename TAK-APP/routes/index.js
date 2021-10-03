var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', homeController.homePageFilters);
router.get('/banner', homeController.ShowBanner);  //from api
router.get('/horoscope', homeController.listAllHoroscopes);//from api
router.get('/talk', homeController.listAllAstrologers);
router.get('/reports', homeController.ListAllReports);
router.get('/askquestions', homeController.AskQuestions);// from api
router.get('/testimonials', homeController.testimonials);

/*ASTROLOGER ROUTES*/
router.get('/sign-up', userController.signUpGet);
router.post('/sign-up', userController.signUpPost, userController.loginPost);
router.get('/login', userController.loginGet);
router.post('/login', userController.loginPost);

module.exports = router;