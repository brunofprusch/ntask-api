//import passport from "passport";
//import {Strategy} from "passport-jwt";


const passport = require('passport'),
      JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
      

module.exports = app => {
    const cfg = app.libs.config;
    const Users = app.dao.db.models.Users;
    const opts = {};
    
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    opts.secretOrKey = cfg.jwtSecret;

    const strategy = new JwtStrategy(opts, (payload, done) => {
            Users.findById(payload.id)
                .then(user => {
                    if (user) {
                        return done(null, {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        });
                    }
                    return done(null, false);
                })
                .catch(error => done(error, null));
            });

        passport.use(strategy);

        return {
            initialize: () => {
                return passport.initialize();
            },
            authenticate: () => {
                return passport.authenticate("jwt", cfg.jwtSession);
            }
    };
}