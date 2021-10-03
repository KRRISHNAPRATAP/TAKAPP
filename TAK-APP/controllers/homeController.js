
const b = require('../models/banner');
const h = require('../models/horoscope');
const u=require('../models/users');
const u=require('../models/report');
const u=require('../models/question');

exports.ShowBanner = async (req, res, next) => {
    try{ //call banner API
        const banner = await b.find({ available: { $eq:true }});
        res.render('banner', { title: 'Banner', banner });
    } catch(error) {
        next(error);
    }
}
exports.listAllHoroscopes=async (req, res, next) => {
    try{ 
        const horoscope = await h.find({ available: { $eq:true }});
        res.render('horoscope', { title: 'Banner', horoscope });
    } catch(error) {
        next(error);
    }
}

exports.listAllAstrologers=async (req, res, next) => {
    try{ 
        const astrologer = await u.find({ available: { $eq:true }});
        res.render('Astrologer', { title: 'Astrologer', astrologer });
    } catch(error) {
        next(error)
    }
}


exports.ListAllReports=async (req, res, next) => {
    try{ 
        const report = await r.find({ available: { $eq:true }});
        res.render('Report', { title: 'Report', report });
    } catch(error) {
        next(error)
    }
}

exports.AskQuestions=async (req, res, next) => {
    try{ 
        const question = await q.find({ available: { $eq:true }});
        res.render('Question', { title: 'Report', question });
    } catch(error) {
        next(error)
    }
}