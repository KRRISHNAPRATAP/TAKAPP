
const User = require('../models/users');

const Passport = require('passport');

// Express validator
const { check, validationResult } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');

const querystring = require('querystring');
exports.signUpGet = (req, res) => {
    res.render('sign_up', { title: 'User sign up' });
};


exports.signUpPost = [
    check('first_name').isLength({ min: 1 }).withMessage('First name must be specified')
    .isAlphanumeric().withMessage('First name must be alphanumeric'),

    check('lastname').isLength({ min: 1 }).withMessage('Surname must be specified')
    .isAlphanumeric().withMessage('Surname must be alphanumeric'),

    check('email').isEmail().withMessage('Invalid email adress'),
    
    check('confirm_email')
    .custom(( value, { req } ) => value === req.body.email)
    .withMessage('Email adresses do not match'),

    check('password').isLength({ min: 6 })
    .withMessage('Invalid password, password must be a minimum of 6 characters'),

    check('confirm_password')
    .custom(( value, { req } ) => value === req.body.password)
    .withMessage('Passwords do not match'),

    sanitize('*').trim().escape(),

    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            res.render('sign_up', { title: 'Please fix the following errors:', errors: errors.array() });
            return;
        } else {
            const newUser = new User(req.body);
            User.register(newUser, req.body.password, function(err) {
                if(err) {
                    console.log('error while registering!', err);
                    return next(err);
                }
                next();
            });
        }
    }
];

exports.loginGet = (req,res) => {
    res.render('login', { title: 'Login to continue' });
};
