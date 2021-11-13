const jwt = require('jsonwebtoken')
const passport = require('passport')
const BearerStrategy = require('passport-http-bearer').Strategy
const User = require('../models/user')

passport.use(new BearerStrategy(
    async function (token, done) {
        console.log("enter middle ware");

        // token qsdqsd =>{userId, expired,key } 
        try {
            const decoded = await jwt.verify(token, process.env.TOKEN_SECRET)
            console.log(decoded);
            User.findById(decoded.userId, function (err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                return done(null, user, { scope: 'all' });
            });
        } catch (error) {
            console.log({ error });
            return done(null, false);
        }

    }
));