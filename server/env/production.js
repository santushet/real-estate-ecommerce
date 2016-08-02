/*
    These environment variables are not hardcoded so as not to put
    production information in a repo. They should be set in your
    heroku (or whatever VPS used) configuration to be set in the
    applications environment, along with NODE_ENV=production

 */
var fs = require('fs');
var secretFB = JSON.parse(fs.readFileSync(__dirname+'/../../../secreFB.txt','utf8'));

module.exports = {
    "DATABASE_URI": "postgres://localhost:5432/fsg",
    "SESSION_SECRET": "Optimus Prime is my real data",
    "TWITTER": {
        "consumerKey": process.env.TWITTER_CONSUMER_KEY,
        "consumerSecret": process.env.TWITTER_CONSUMER_SECRET,
        "callbackUrl": process.env.TWITTER_CALLBACK
    },
    "FACEBOOK": {
        "clientID": secretFB.client,
        "clientSecret": secretFB.secret,
        "callbackURL": secretFB.cb
    },
    "GOOGLE": {
        "clientID": process.env.GOOGLE_CLIENT_ID,
        "clientSecret": process.env.GOOGLE_CLIENT_SECRET,
        "callbackURL": process.env.GOOGLE_CALLBACK_URL
    },
    "LOGGING": true
};
